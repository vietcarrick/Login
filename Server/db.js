const mysql = require('mysql')
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mnm_review'
})

connect.connect(function(err) {
    if (err) 
    {(console.log("Failed to connect"))}
    else
    console.log("Connected!!!")
  });


module.exports = connect;
