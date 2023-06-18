const express = require('express');
const loginRouter = require('../routes/loginRoute');
const registerRouter = require('../routes/registerRoute');

const app = express();

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;