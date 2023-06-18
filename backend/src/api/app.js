const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRoute');
const productRouter = require('../routes/productsRoute');
const registerRouter = require('../routes/registerRoute');
const saleProductRouter = require('../routes/saleProductsRoute');
const userRouter = require('../routes/userRoute');
const saleRouter = require('../routes/saleRouter');
const adminRoute = require('../routes/adminRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/register', registerRouter);
app.use('/sales', saleRouter);
app.use('/user', userRouter);
app.use('/administrator', adminRoute);
app.use('/order', saleProductRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;