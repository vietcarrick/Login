const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller');

    router.get('/list', foodController.getFoodList)

    router.get('/detail/:id', foodController.detailFood)

    router.post('/add', foodController.addFood)

    router.delete('/delete/:id', foodController.removeFood)

    router.put('/update/:id', foodController.updateFood)

module.exports = router;