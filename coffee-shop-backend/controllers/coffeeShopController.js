/** @format */

// /** @format */

// const CoffeeShop = require("../models/coffeeShop");

// // Get all coffee shops
// exports.getCoffeeShops = async (req, res) => {
//     try {
//         const shops = await CoffeeShop.find();
//         res.json(shops);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Create a new coffee shop
// exports.addCoffeeShop = async (req, res) => {
//     const { name, location, rating, products } = req.body;
//     try {
//         const newShop = new CoffeeShop({ name, location, rating, products });
//         const savedShop = await newShop.save();
//         res.status(201).json(savedShop);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const CoffeeShop = require("../models/coffeeShopSchema");
const Product = require("../models/productSchema");

// Get all coffee shops
exports.getCoffeeShops = async (req, res) => {
    try {
        const coffeeShops = await CoffeeShop.find().populate("products");
        res.json(coffeeShops);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a coffee shop by ID
exports.getCoffeeShopById = async (req, res) => {
    try {
        const coffeeShop = await CoffeeShop.findById(req.params.id).populate(
            "products"
        );
        if (!coffeeShop)
            return res.status(404).json({ message: "Coffee shop not found" });
        res.json(coffeeShop);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new coffee shop
exports.createCoffeeShop = async (req, res) => {
    const { name, locationName, location, rating, image } = req.body;
    const coffeeShop = new CoffeeShop({
        name,
        locationName,
        location,
        rating,
        image,
    });

    try {
        const newCoffeeShop = await coffeeShop.save();
        res.status(201).json(newCoffeeShop);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a coffee shop
exports.updateCoffeeShop = async (req, res) => {
    const { name, locationName, location, rating, image } = req.body;

    try {
        const coffeeShop = await CoffeeShop.findById(req.params.id);
        if (!coffeeShop)
            return res.status(404).json({ message: "Coffee shop not found" });

        coffeeShop.name = name ?? coffeeShop.name;
        coffeeShop.locationName = locationName ?? coffeeShop.locationName;
        coffeeShop.location = location ?? coffeeShop.location;
        coffeeShop.rating = rating ?? coffeeShop.rating;
        coffeeShop.image = image ?? coffeeShop.image;

        const updatedCoffeeShop = await coffeeShop.save();
        res.json(updatedCoffeeShop);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a coffee shop
exports.deleteCoffeeShop = async (req, res) => {
    try {
        const coffeeShop = await CoffeeShop.findById(req.params.id);
        if (!coffeeShop)
            return res.status(404).json({ message: "Coffee shop not found" });

        await coffeeShop.remove();
        res.json({ message: "Coffee shop deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
