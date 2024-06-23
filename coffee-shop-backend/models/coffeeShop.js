/** @format */

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});

const CoffeeShopSchema = new mongoose.Schema({
    name: String,
    location: String,
    rating: Number,
    products: [ProductSchema],
});

module.exports = mongoose.model("CoffeeShop", CoffeeShopSchema);
