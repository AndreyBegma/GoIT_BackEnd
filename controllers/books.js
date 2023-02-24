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

module.exports.RemoveBook = async (req,res) => { 
    const {error} = validator.RemoveBook(req.query)
    if (error) {
        await res.status(400).send(error.details[0].message)
    } else {
        await BooksModel.findByIdAndDelete(req.query.id)
          .then(() => res.status(200).send('Book removed successfully'))
          .catch(err => res.status(400).send(err))
    }
}

module.exports.UpdateBook = async (req,res) => { 
    const {error} = validator.UpdateBook(req.body)
    if (error) {
        await res.status(400).send(error.details[0].message)
    } else {
        await BooksModel.findByIdAndUpdate(req.body.id, req.body, {new: true})
         .then(() => res.status(200).send({
            id: req.body.id,
            title: req.body.title,
            author: req.body.author
         }))
         .catch(err => res.status(400).send(err))
    }
}

module.exports.GetListBooks = async (req,res) => { 
    const {error} = validator.GetBooksList(req.query)
    if (error) {
        await res.status(400).send(error.details[0].message)
    } else {
        firstItem = (req.query.page * req.query.limit) - req.query.limit - 1
        firstItem = (firstItem < 0)? 0 : firstItem
        let books = await BooksModel.find()
        .skip(firstItem)
        .limit(req.query.limit)

        if (books){ 
            await res.status(200).send(books)
        } else { 
            await res.status(404).send('No books found')
        }
    }
}