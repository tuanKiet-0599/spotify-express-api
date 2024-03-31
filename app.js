'use strict';

const cors = require('cors');
const cookieParser = require('cookie-parser');
const login = require('./src/routes/login.route');

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static(`${__dirname}/public`));

app.use(cors()).use(cookieParser());

app.use('/login', login)

app.listen(3000, () => {
    console.log(`Server is listening at localhost:3000`)
})