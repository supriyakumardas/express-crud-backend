const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    vendor: {
        type: String,
        required: true,

    },
    price: {
        type: String,
        required: true,

    },
    quantity: {
        type: String,
        required: true,

    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,

    },

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
