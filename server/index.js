const express = require('express');
const path = require('path');
const parser = require('body-parser');
const controller = require('./controller.js');

const port = 3005;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/explores/:id', controller.get);

app.listen(port, () => console.log('Listening on', port));
