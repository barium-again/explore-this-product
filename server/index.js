const express = require('express');
const path = require('path');
const parser = require('body-parser');
const controller = require('./controller.js');
const PORT = 3005;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores/:id', controller.explores.get);

app.listen(PORT, () => console.log('the server is listening on ', PORT));
