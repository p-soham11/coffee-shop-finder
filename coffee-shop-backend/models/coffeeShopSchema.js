/** @format */

const mongoose = require("mongoose");

const CoffeeShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    locationName: String,
    location: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true },
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    image: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

CoffeeShopSchema.index({ location: "2dsphere" });

const CoffeeShop = mongoose.model("CoffeeShop", CoffeeShopSchema);

module.exports = CoffeeShop;
