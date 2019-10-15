require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

app = express();
app.use(bodyParser.json())
app.use(cors())

app.use(require('./routes'));

app.listen(7000, '10.77.17.75')