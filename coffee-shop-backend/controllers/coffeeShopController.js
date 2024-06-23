/** @format */

const CoffeeShop = require("../models/coffeeShop");

// Get all coffee shops
exports.getCoffeeShops = async (req, res) => {
    try {
        const shops = await CoffeeShop.find();
        res.json(shops);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new coffee shop
exports.addCoffeeShop = async (req, res) => {
    const { name, location, rating, products } = req.body;
    try {
        const newShop = new CoffeeShop({ name, location, rating, products });
        const savedShop = await newShop.save();
        res.status(201).json(savedShop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
