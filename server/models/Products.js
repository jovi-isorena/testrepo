const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;