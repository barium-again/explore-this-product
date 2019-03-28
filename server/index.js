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

app.get('/loaderio-7a8fb6ea2234c92b6f461c084302f033/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '/loaderio-7a8fb6ea2234c92b6f461c084302f033.txt')
  );
});

app.listen(port, () => console.log('Listening on', port));
