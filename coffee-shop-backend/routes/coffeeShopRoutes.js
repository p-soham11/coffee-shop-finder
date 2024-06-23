/** @format */

const express = require("express");
const router = express.Router();
const coffeeShopController = require("../controllers/coffeeShopController");

router.get("/getAll", coffeeShopController.getCoffeeShops);
router.get("/shops/nearby", coffeeShopController.getNearbyCoffeeShops);
router.get("/shop/:id", coffeeShopController.getCoffeeShopById);
router.post("/create", coffeeShopController.createCoffeeShop);
router.put("/update/:id", coffeeShopController.updateCoffeeShop);
router.delete("/del/:id", coffeeShopController.deleteCoffeeShop);

module.exports = router;
