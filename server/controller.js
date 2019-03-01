const Explores = require('../db/model.js');

module.exports = {
  explores: {
    get: (req, res) => {
      let { id } = req.params;
      Explores.find({ productId: id })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(404).end(error));
    }
  }
};
