const validator = require ('../validations/books.js')

const BooksModel = require ('../models/Books.js')

module.exports.AddBook = async (req,res) => { 
    const {error} = validator.AddBook(req.body)
    if (error) {
        throw res.status(400).send(error.details[0].message)
    } else{ 
        const book = new BooksModel({ 
            title: req.body.title,
            author: req.body.author
        })

        await book.save()
            .then(() => res.status(201).send('Book added successfully'))
            .catch(err => res.status(400).send(err))
    }
}

module.exports.FindById = async (req,res) => { 
    const {error} = validator.GetBookById(req.query)
    if (error) {
        await res.status(400).send(error.details[0].message)
    } else {
      let book = await BooksModel.findById(req.query.id)
      if (book){ 
        await res.status(200).send(book)
      } else { 
        await res.status(404).send('Book not found')
      }
    }
}