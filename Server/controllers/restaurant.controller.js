var restaurant = require("../models/restaurant.model");
class RestaurantController {
  getRestaurantList = function (req, res) {
    restaurant.getAll(function (data) {
      res.send({ result: data });
    });
  };

  detailRestaurant = function (req, res) {
    restaurant.getById(req.params.id, function (response) {
      res.send({ result: response });
    });
  };

  // body-parser
  addRestaurant = function (req, res) {
    var data = req.body;
    restaurant.create(data, function (response) {
      res.send({ result: response });
    });
  };

  removeRestaurant = function (req, res) {
    var id = req.params.id;
    restaurant.remove(id, function (response) {
      res.send({ result: response });
    });
  };

  updateRestaurant = function (req, res) {
    var id = req.params.id;
    var data = req.body;
    restaurant.update(id, data, function (response) {
      res.send({ result: response });
    });
  };
}

module.exports = new RestaurantController();
