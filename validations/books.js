const joi = require('joi')

exports.GetBooksList = (data => { 
    const schema = joi.object({
        page: joi.number().integer().min(1).max(100).required(),
        limit: joi.number().integer().min(1).required(),
    })
    return schema.validate(data)
})

exports.GetBookById = (data => { 
    const schema = joi.object({
        id: joi.string().min(12).required(),
    })
    return schema.validate(data)
})

exports.AddBook = (data => { 
    const schema = joi.object({
        title: joi.string().min(1).required(),
        author: joi.string().min(1).required(),
    })
    return schema.validate(data)
})

exports.UpdateBook = (data => {
    const schema = joi.object({
        id: joi.string().min(1).required(),
        title: joi.string().min(1),
        author: joi.string().min(1)
    })
    return schema.validate(data)
})

exports.RemoveBook = (data => {
    const schema = joi.object({
        id: joi.string().min(1).required(),
    })
    return schema.validate(data)
})