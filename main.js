const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();

const routes = require("./Route1/index");

app.use(routes)
app.listen(8080, () => console.log(`Started server at http://localhost:8080`));