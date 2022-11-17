const User = require('../models/users.model')
class userController {
    getList = function(req, res) {
        User.getAll(function(data){
            res.send({result: data});
    });
}

    detailUser = function(req, res) {
        User.getById(req.params.id, function(response) {
            res.send({result: response})
    })
}

// body-parser
    addUser = function(req, res) {
        const data = req.body;
        console.log(data)
        User.create(data, function(response) {
            console.log("ok")
            res.send({result: response});
    });
}

    removeUser = function(req, res) {
        const id = req.params.id;
        User.remove(id, function(response) {
            res.send({result: response});
    })
}

    updateUser = function(req, res) {
        const id = req.params.id;
        const data = JSON.parse(JSON.stringify(req.body))
        const avatar = req.files?.avatar
        User.update(id, data, avatar, function(response) {
            res.send({result: response})
    })
}

}

module.exports = new userController();
