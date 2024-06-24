/** @format */
const axios = require("axios");
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

// Getting nearby coffee shops
exports.getNearbyCoffeeShops = async (req, res) => {
    const { address } = req.query;

    const googleApiKey = process.env.GOOGLE_API_KEY;

    try {
        const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`
        );

        if (data.results.length === 0) {
            return res.status(404).json({ error: "Address not found" });
        }

        const { lat, lng } = data.results[0].geometry.location;
        console.log("Coordinates:", lat, lng);

        const nearbyShops = await CoffeeShop.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng],
                    },
                    $maxDistance: 8000,
                },
            },
        }).populate("products");

        console.log("Nearby Shops:", nearbyShops);
        res.json(nearbyShops);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err.message });
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
