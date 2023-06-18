const express = require('express');
const loginRouter = require('../routes/loginRoute');
const registerRouter = require('../routes/registerRoute');
const adminRoute = require('../routes/adminRoute');

const app = express();

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/administrator', adminRoute);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;