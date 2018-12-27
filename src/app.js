const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require('./config');
const fileUpload = require('express-fileupload');


const app = express();
const router = express.Router();

//conectar no banco
mongoose.connect(config.connectionString);

//Carregar models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");
const File = require('./models/file')

//Carregar as rotas
const index = require("./routes/index");
const products = require("./routes/products");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-router");
const fileRoute = require('./routes/file-router');

app.use(bodyParser.json({
        limit: '5mb'
    }));
app.use(fileUpload({preserveExtension: true}));
app.use(bodyParser.urlencoded({ extended: false }));

//Habilitando o CORS
app.use(function (req, res, next){
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');

       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept, x-access-token');

       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next()
});
app.use("/", index);
app.use("/products", products);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);
app.use('/file', fileRoute);

module.exports = app;
