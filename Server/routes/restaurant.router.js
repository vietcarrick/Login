const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');

    router.get('/list', restaurantController.getRestaurantList)

    router.get('/detail/:id', restaurantController.detailRestaurant)

    router.post('/add', restaurantController.addRestaurant)

    router.delete('/delete/:id', restaurantController.removeRestaurant)

    router.put('/update/:id', restaurantController.updateRestaurant)

module.exports = router;