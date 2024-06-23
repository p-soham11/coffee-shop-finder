/** @format */

const Product = require("../models/productModel");
const CoffeeShop = require("../models/coffeeShopModel");

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("shop");
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("shop");
        if (!product)
            return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, price, category, shop } = req.body;
    const product = new Product({ name, price, category, shop });

    try {
        const newProduct = await product.save();
        // Add product to coffee shop's products list
        const coffeeShop = await CoffeeShop.findById(shop);
        coffeeShop.products.push(newProduct._id);
        await coffeeShop.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    const { name, price, category } = req.body;

    try {
        const product = await Product.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        product.name = name ?? product.name;
        product.price = price ?? product.price;
        product.category = category ?? product.category;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        await product.remove();
        // Remove product from coffee shop's products list
        const coffeeShop = await CoffeeShop.findById(product.shop);
        coffeeShop.products = coffeeShop.products.filter(
            (p) => p.toString() !== product._id.toString()
        );
        await coffeeShop.save();

        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
