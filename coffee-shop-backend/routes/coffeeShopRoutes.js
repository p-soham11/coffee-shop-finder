/** @format */

const express = require("express");
const router = express.Router();
const coffeeShopController = require("../controllers/coffeeShopController");

router.get("/", coffeeShopController.getCoffeeShops);
router.get("/:id", coffeeShopController.getCoffeeShopById);
router.post("/", coffeeShopController.createCoffeeShop);
router.put("/:id", coffeeShopController.updateCoffeeShop);
router.delete("/:id", coffeeShopController.deleteCoffeeShop);

module.exports = router;
