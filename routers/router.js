const express = require("express");
const router = express.Router();
const TokenController = require("../controllers/token-controller");
const TokenMateraController = require("../controllers/tokenMatera-controller");
const BoletoMateraController = require("../controllers/boletoMatera-controller");
const BoletoController = require("../controllers/boleto-controller");
const RequestsToken = require("../controllers/requestsToken-controller");
const HomeController = require("../controllers/home-controller");

//HOME
router.get("/", HomeController.getHome);
//REQUESTS
router.get("/requestsToken", RequestsToken.getRequests);
//MATERA
router.post("/tokenMatera", TokenMateraController.postTokenMatera);
router.post("/materaBoleto", BoletoMateraController.postboletoMatera);
//WORKER
router.post("/token", TokenController.postToken);
router.post("/boleto", BoletoController.postBoleto);

module.exports = router;
