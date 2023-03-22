const dadosTokenMatera = require("../dados/dadosTokenMatera");

exports.postTokenMatera = (req, res) => {
  res.status(200).json(dadosTokenMatera);
};
