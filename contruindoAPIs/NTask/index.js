var express = require ('express');
var consign = require('consign');
const app = express();
app.set("json spaces",4);
consign()
.include("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);

