const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [5, "This can't be a setup!!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [1, "It can't be a joke without punchline!"]
    },
    timestamps: true
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;