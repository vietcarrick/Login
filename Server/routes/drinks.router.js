const express = require('express');
const router = express.Router();
const drinksController = require('../controllers/drinks.controller')

    router.get('/list', drinksController.getDrinksList)

    router.get('/detail/:id', drinksController.detailDrinks)

    router.post('/add', drinksController.addDrinks)

    router.delete('/delete/:id', drinksController.removeDrinks)

    router.put('/update/:id', drinksController.updateDrinks)

module.exports = router;