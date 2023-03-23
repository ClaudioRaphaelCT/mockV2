const dadosBoletoMatera = require("../dados/dadosBoletoMatera");

exports.postboletoMatera = (req, res) => {
  if (req.headers["content-type"] !== "Content-Type") {
    res.status(400).json({
      error: [
        {
          code: "CAR-COB-19",
          message:
            "Ocorreu um erro ao chamar a API do core. Code: ORA-20010. Message: @#carteira=9@#@#cedente=1@#.",
        },
      ],
    });
  }
  res.status(200).json(dadosBoletoMatera);
};
