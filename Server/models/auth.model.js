const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
User.login = function (data, result) {
  const email = data.formData.email
  const password = data.formData.password

  db.query(`SELECT * FROM user WHERE user_email='${email}'`, function (err, user) {
    if (err || user.length === 0) {
      result("Khong tim thay tai khoan");
    } else {
        const checkPass = user[0].user_password;
        const kq = bcrypt.compareSync(password, checkPass);
        if (kq){
          const accessTokenLife = 30*24*60*60;
        	const accessTokenSecret = "mnm_beerreview";
            var token = jwt.sign({
                id: user.id
            },accessTokenSecret, { expiresIn: accessTokenLife});
            result({ token, id: user[0].user_id, message: "Đăng nhập thành công"})
        }else{
          result("Mat khau khong chinh xac");
        }
    }
  });
};
User.register = function (data, result) {
  const username = data.user.username;
  const password = data.user.password;
  const repassword = data.user.repassword;
  const email = data.user.email;

  db.query("SELECT * FROM user WHERE user_email = ?", email, function (err, user) {
    if (err || user.length === 0) {
      if(password !== repassword) {
        result("Mat khau khong khop");
      }else{
        const salt = bcrypt.genSaltSync(10);
        const passwordhash = bcrypt.hashSync(password, salt);
        db.query(`INSERT INTO user(user_name, user_password, user_email) VALUES ("${username}", "${passwordhash}", "${email}")`, function (err, user){
          if(err){
            result("failed");
          }else{
            result("Dang ky thanh cong")
          }
        })
      }
    } else {
      result("email ton tai");
    }
  });
};

module.exports = User
