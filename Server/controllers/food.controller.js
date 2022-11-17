var food = require("../models/food.model");
class FoodController {
  getFoodList = function (req, res) {
    food.getAll(function (data) {
      res.send({ result: data });
    });
  };

  detailFood = function (req, res) {
    food.getById(req.params.id, function (response) {
      res.send({ result: response });
    });
  };

  // body-parser
  addFood = function (req, res) {
    var data = req.body;
    food.create(data, function (response) {
      res.send({ result: response });
    });
  };

  removeFood = function (req, res) {
    var id = req.params.id;
    food.remove(id, function (response) {
      res.send({ result: response });
    });
  };

  updateFood = function (req, res) {
    var id = req.params.id;
    var data = req.body;
    food.update(id, data, function (response) {
      res.send({ result: response });
    });
  };
}

module.exports = new FoodController();
