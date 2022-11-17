var drinks = require("../models/drinks.model");
class DrinksController {
  getDrinksList = function (req, res) {
    drinks.getAll(function (data) {
      res.send({ result: data });
    });
  };

  detailDrinks = function (req, res) {
    drinks.getById(req.params.id, function (response) {
      res.send({ result: response });
    });
  };

  // body-parser
  addDrinks = function (req, res) {
    var data = req.body;
    drinks.create(data, function (response) {
      res.send({ result: response });
    });
  };

  removeDrinks = function (req, res) {
    var id = req.params.id;
    drinks.remove(id, function (response) {
      res.send({ result: response });
    });
  };

  updateDrinks = function (req, res) {
    var id = req.params.id;
    var data = req.body;
    drinks.update(id, data, function (response) {
      res.send({ result: response });
    });
  };
}

module.exports = new DrinksController();
