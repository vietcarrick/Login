const jwt = require("jsonwebtoken");
var User = require("../models/auth.model");

class authController {
  login = function (req, res) {
    const data = req.body
    User.login(data, function (data) {
      res.cookie("token", data)
      res.send({ result: data });
    });
  };
  register = function (req, res) {
    const data = req.body
    User.register( data, function (data) {
      res.send({ result: data });
    });
  };
}

module.exports = new authController();
