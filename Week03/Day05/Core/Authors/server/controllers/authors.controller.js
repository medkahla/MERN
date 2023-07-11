// CRUD 

// import the model here
const Author = require("../models/authors.model")

// READ ALL
module.exports.readAll = (req, res) => {
    Author.find()
    .then((allAuthors) =>{
        res.json(allAuthors)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}

// CREATE
module.exports.create = (req, res) => {
    Author.create(req.body)
    .then((newlAuthor)=>{
        res.json({Author: newlAuthor})
    })
    .catch((err)=>{
        res.status(400).json({ message: "Something went wrong", error: err });
    });
};

//READ ONE
module.exports.findOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json({ Author: oneSingleAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// UPDATE 
module.exports.update = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body,
    {new: true, runValidators: true})
    .then((updatedAuthor)=>{
        res.json({Author: updatedAuthor})
    })
    .catch((err) => {
        res.status(400).json({ message: 'Something went wrong', error: err })
    });
}

// DELETE
module.exports.delete = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}