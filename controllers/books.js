const validator = require ('../validations/books.js')
module.exports.AddBook = (req,res) => { 
    const {error} = validator.AddBook(req.body)
    if (error) {
        throw res.status(400).send(error.details[0].message)
    } else{ 
        res.status(200).send('Book added successfully')
    }
}