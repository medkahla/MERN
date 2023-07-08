// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "{PATH} must be at least 3 chars"]

    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    description:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[5, "{PATH} must have a description"]
    }

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;