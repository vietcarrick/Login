const express = require('express');
const morgan = require('morgan');
const port = 8081;
const app = express();

const userRoute = require('./routes/user.router')
const authRoute = require('./routes/auth')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload');


var cors = require('cors')

app.use(cors())
app.use(fileUpload());


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/register', registerRoute);
app.use('/auth', authRoute);
app.use('/users', userRoute);

app.listen(port, function(){
    console.log("Your app running on port " + port);
})
