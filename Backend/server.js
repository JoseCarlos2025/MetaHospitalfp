require('dotenv').config();
 
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
const port = process.env.PORT || 4000;
 
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


app.use(function (req, res, next) {
  
  var token = req.headers['authorization'];
  if (!token) return next();

  if(req.headers.authorization.indexOf('Basic ') === 0){

    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');

    req.body.email = email;
    req.body.password = password;

    return next();
  }

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  });
});

require("./routes/user.routes")(app);

app.listen(port, () => {
  console.log('Server started on: ' + port);
});