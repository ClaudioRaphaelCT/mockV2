const requestsToken = require("../dicasRequests/requestsToken");

exports.getRequests = (req, res) => {
  res.json(requestsToken);
};
