require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//start content

console.log('Directorio actual', __dirname);
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("./../"));

app.listen(port);

console.log(`Server listening on port ${port} ...`);
