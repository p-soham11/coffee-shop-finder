/** @format */

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Coffee", "Drinks", "Food"],
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CoffeeShop",
        required: true,
    },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
