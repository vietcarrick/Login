const db = require("../db");
const Drinks = function (drinks) {
  this.id = drinks.id;
  this.drinksName = drinks.drinksName;
  this.drinksImg = drinks.drinksImg;
  this.drinksDesciption = drinks.drinksDesciption;
};

Drinks.getAll = function (result) {
  db.query("SELECT * FROM drinks", function (err, drinks) {
    if (err) {
      result(null);
    } else {
      result(drinks);
    }
  });
};

Drinks.getById = function (id, result) {
  db.query(
    `SELECT * FROM drinks WHERE drinks_id = ${id} `,
    function (err, drinks) {
      if (err || drinks.length === 0) {
        result(err);
      } else {
        result(drinks);
      }
    }
  );
};

Drinks.create = function (data, result) {
  db.query("INSERT INTO drinks SET ?", data, function (err, drinks) {
    if (err) {
      result(err);
    } else {
      result({ id: drinks.insertId, ...data });
    }
  });
};

Drinks.remove = function (id, result) {
  db.query(
    "DELETE FROM drinks WHERE drinks_id = ?",
    id,
    function (err, drinks) {
      if (err) {
        result(err);
      } else {
        result("Delete " + id + " success");
      }
    }
  );
};

// get param and body
Drinks.update = function (id, data, result) {
  console.log(id);
  console.log(data);
  db.query(
    `UPDATE drinks 
     SET drinks_name = "${data.drinks_name}", 
         drinks_img = "${data.drinks_img}",
         drinks_desciption = "${data.drinks_desciption}"
    WHERE drinks_id = ${id}`,
    function (err, drinks) {
      if (err) {
        result(err);
      } else {
        result(drinks);
      }
    }
  );
};

module.exports = Drinks;
