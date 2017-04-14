const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); //athuga með að nota CORS on ExpressJS
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Kveikja á mongodb fyrst
// run in cmd => "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
//open shell with "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"
// Connect To Database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+ err);
});


const app = express();

const users = require('./routes/users');

const port = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

//Start server
app.listen(port, () => {
    console.log('Server started on port: '+ port)
});