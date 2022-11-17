const db = require("../db");



const User = function (user) {
  this.id = user.id;
  this.userName = user.userName;
  this.password = user.password;
  this.email = user.email;
  this.img = user.img;
  this.phone = user.phone;
  this.address = user.address;
  this.level = user.level;
};

User.getAll = function (result) {
  db.query("SELECT * FROM user", function (err, user) {
    if (err) {
      result(null);
    } else {
      result(user);
    }
  });
};
User.getById = function (id, result) {
  console.log(id)
  db.query(`SELECT * FROM user WHERE user_id = ${id}` , function (err, user) {
    if (err || User.length === 0) {
      result(err);
    } else {
      console.log(user[0])
      result(user[0]);
    }
  });
};
User.create = function (data, result) {
  db.query("INSERT INTO User SET ?", data, function (err, user) {
    if (err) {
      result(err);
    } else {
      result({ id: user.insertId, ...data });
    }
  });
};

User.remove = function (id, result) {
  db.query("DELETE FROM user WHERE id = ?", id, function (err, user) {
    if (err) {
      result(err);
    } else {
      result("Delete " + id + " success");
    }
  });
};

// get param and body
User.update = function (id, data, avatar, result) {
  let uploadPath;
  uploadPath = "./upload/" + avatar.name;
  avatar.mv(uploadPath, function (err) {
    if (err) {
      return result("Upload failed")
    }
    db.query(
      `UPDATE user SET user_name = "${data.name}", 
                              user_img = "${avatar.name}",
                              user_phone = "${data.phone}",
                              user_address = "${data.address}"
                              WHERE user_id = ${id}`,
      function (err, user) {
        if (err) {
          console.log(err)
          result(err);
        } else {
          console.log("success");
          result("success");
        }
      }
    );
  });
};

module.exports = User;
