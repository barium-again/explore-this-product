const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/explore', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to db'));
db.once('open', () => console.log('Connected to mongoDB'));

module.exports = db;
