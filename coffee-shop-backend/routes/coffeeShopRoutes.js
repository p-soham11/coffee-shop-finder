/** @format */

const express = require("express");
const {
    getCoffeeShops,
    addCoffeeShop,
} = require("../controllers/coffeeShopController");

const router = express.Router();

// Route to get all coffee shops
router.get("/coffeeshops", getCoffeeShops);

// Route to create a new coffee shop
router.post("/coffeeshops", addCoffeeShop);

module.exports = router;
