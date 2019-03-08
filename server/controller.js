const Explores = require('../db/model.js');

module.exports = {
  get: (req, res) => {
    let { id } = req.params;
    Explores.find({ productId: id })
      .lean()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(404).end(error));
  }
};
