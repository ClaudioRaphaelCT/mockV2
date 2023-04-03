const dadosBoletoMatera = require("../dados/dadosBoletoMatera");

exports.postboletoMatera = (req, res) => {
  res.status(200).json(dadosBoletoMatera);
};
