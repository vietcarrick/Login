const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

    router.get('/list', userController.getList)

    router.get('/detail/:id', userController.detailUser)

    router.post('/add', userController.addUser)

    router.delete('/delete/:id', userController.removeUser)

    router.put('/update/:id', userController.updateUser)

module.exports = router;