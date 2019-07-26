var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartsRouter = require('./routes/carts');
var showsRouter = require('./routes/shows');
var ticketsRouter = require('./routes/tickets');
var ticketsCartsRouter = require('./routes/ticketsCarts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/carts', cartsRouter);
app.use('/api/v1/shows', showsRouter);
app.use('/api/v1/tickets', ticketsRouter);
app.use('/api/v1/ticketsCarts', ticketsCartsRouter);

module.exports = app;
