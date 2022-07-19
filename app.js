const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const emailParser = require('./routes/email');
const salesforceParser = require('./routes/salesforce');
const githubParser = require('./routes/github');
const zendeskParser = require('./routes/zendesk');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/email', emailParser);
app.use('/salesforce', salesforceParser);
app.use('/github', githubParser);
app.use('/zendesk', zendeskParser);

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
console.log('Parsing service running'); // disable-eslint

module.exports = app;
