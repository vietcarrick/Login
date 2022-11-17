const db = require("../db");
const Food = function (food) {
  this.id = food.id;
  this.foodName = food.foodName;
  this.foodImg = food.foodImg;
  this.foodPrice = food.foodPrice;
  this.foodVote = food.foodVote;
};

Food.getAll = function (result) {
  db.query("SELECT * FROM food", function (err, food) {
    if (err) {
      result(null);
    } else {
      result(food);
    }
  });
};

Food.getById = function (id, result) {
  db.query(`SELECT * FROM food WHERE food_id = ${id} `, function (err, food) {
    if (err || food.length === 0) {
      result(err);
    } else {
      result(food);
    }
  });
};

Food.create = function (data, result) {
  db.query("INSERT INTO food SET ?", data, function (err, food) {
    if (err) {
      result(err);
    } else {
      result({ id: food.insertId, ...data });
    }
  });
};

Food.remove = function (id, result) {
  db.query("DELETE FROM food WHERE food_id = ?", id, function (err, food) {
    if (err) {
      result(err);
    } else {
      result("Delete " + id + " success");
    }
  });
};

// get param and body
Food.update = function (id, data, result) {
  db.query(
    `UPDATE food 
     SET food_name = "${data.food_name}", 
         food_img = "${data.food_img}",
         food_price = ${data.food_price},
         food_vote = "${data.food_vote}"
    WHERE food_id = ${id}`,
    function (err, food) {
      if (err) {
        result(err);
      } else {
        result(food);
      }
    }
  );
};

module.exports = Food;
