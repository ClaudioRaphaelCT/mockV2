const dadosHome = require("../dados/dadosHome");
exports.getHome = (req, res) => {
  res.status(200).json(dadosHome);
};
