// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow
const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "{PATH} must be at least 3 chars"],
        trim : true
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;