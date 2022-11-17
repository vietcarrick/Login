const db = require("../db");
const Restaurant = function (restaurant) {
  this.id = restaurant.id;
  this.restaurantName = restaurant.restaurantName;
  this.restaurantImg = restaurant.restaurantImg;
  this.restaurantPrice = restaurant.restaurantPrice;
  this.restaurantVote = restaurant.restaurantVote;
};

Restaurant.getAll = function (result) {
  db.query("SELECT * FROM restaurant", function (err, restaurant) {
    if (err) {
      result(null);
    } else {
      result(restaurant);
    }
  });
};

Restaurant.getById = function (id, result) {
  db.query(
    `SELECT * FROM restaurant WHERE res_id = ${id} `,
    function (err, restaurant) {
      if (err || restaurant.length === 0) {
        result(err);
      } else {
        result(restaurant);
      }
    }
  );
};

Restaurant.create = function (data, result) {
  db.query("INSERT INTO restaurant SET ?", data, function (err, restaurant) {
    if (err) {
      result(err);
    } else {
      result({ id: restaurant.insertId, ...data });
    }
  });
};

Restaurant.remove = function (id, result) {
  db.query(
    "DELETE FROM restaurant WHERE res_id = ?",
    id,
    function (err, restaurant) {
      if (err) {
        result(err);
      } else {
        result("Delete " + id + " success");
      }
    }
  );
};

// get param and body
Restaurant.update = function (id, data, result) {
  db.query(
    `UPDATE restaurant 
     SET res_name = "${data.res_name}", 
         res_img = "${data.res_img}",
         res_phone = "${data.res_phone}",
         res_address = "${data.res_address}",
         res_time = "${data.res_time}",
         res_description = "${data.res_description}",
         vote_id = ${data.vote_id}
    WHERE res_id = ${id}`,
    function (err, restaurant) {
      if (err) {
        result(err);
      } else {
        result(restaurant);
      }
    }
  );
};

module.exports = Restaurant;
