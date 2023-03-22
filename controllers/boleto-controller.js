exports.postBoleto = (req,res) =>{
    if (
        req.headers.channel !== "topaz" ||
        req.headers.authorization !==
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXamdVN0tHS2JmTlBOMWIydlM3bkNzRG5aSHhaTmRsQklCVlp1QVBFSGlrIn0.eyJleHAiOjE2Nzg5NzY1OTMsImlhdCI6MTY3ODk3NDc5MywianRpIjoiMTcxYjAyMjAtYzEwMC00NzZjLWFlOGQtMDA5ZGY2ZmI1NDgwIiwiaXNzIjoiaHR0cHM6Ly9yZWRoYXQtc3NvLWNzZi1jcnQtc3NvLmFwcHMub2NwNGNydC5jc2ZjcHYud2NvcnAuY2FycmVmb3VyLmNvbS9hdXRoL3JlYWxtcy9DU0YtU2Vydmljb3MiLCJhdWQiOlsiY3NmLWNvbnNpZ25hZG8iLCJhY2NvdW50Il0sInN1YiI6IjVmNTgxZDdiLThmMDEtNGRiOC05NjY4LTg4N2I3ZjhlOGRjOCIsInR5cCI6IkJlYXJlciIsImF6cCI6InN2Yy10b3Bhei1jb25zaWduYWRvIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1jc2Ytc2Vydmljb3MiXX0sInJlc291cmNlX2FjY2VzcyI6eyJjc2YtY29uc2lnbmFkbyI6eyJyb2xlcyI6WyJjc2YtY29uc2lnbmFkby1hcGktY29icmFuY2EiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SWQiOiJzdmMtdG9wYXotY29uc2lnbmFkbyIsImNsaWVudEhvc3QiOiIzNC45NS4yMzYuNzQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtc3ZjLXRvcGF6LWNvbnNpZ25hZG8iLCJjbGllbnRBZGRyZXNzIjoiMzQuOTUuMjM2Ljc0In0.J1KXiotAYXo1yqrdCoBHJpsMOUE7owATWvSWwegk8YAIAsXPOzay-XkL4uWpKMeVfI4fTgmFYTGrIdbgX6P6TuUKEZ4g7uM1mkqZZsGjO5sUV32sGUwe7ZfDWmzmD1pNVmWUVWXeW2XB8p_XpAUPV-X5kFXzzns_1waNHWRTiE0WvPb9m0Hqj_3wIYD7R3ruJRQqKlo0TM9VcJkMmoTIoxb8gN8sLLYJw2JNNlxZ9RNEvb-8vdJCit0ciKMTnUEJrvE_8GmEKy9rntCmvdNluVHCIUVcprgjDv0LjIdlnp6TXIuy-cAGyg0Krm2z1mrIv7keY9TS0czm_ZoyDRi4-w" ||
        req.headers.content !== "application/json"
      ) {
        res.status(400).json({
          status: "Não foi possivel realizar o POST",
          erro: "HEADER indevido!",
        });
      }
      if (
        typeof req.body.idBoleto !== "number" ||
        typeof req.body.cpfCliente !== "string" ||
        typeof req.body.nomeCliente !== "string" ||
        typeof req.body.nroContrato !== "string" ||
        typeof req.body.emailCliente !== "string" ||
        typeof req.body.boletoPdf !== "string" ||
        typeof req.body.tipoBoleto !== "string"
      ) {
        res.status(400).json({
          status: "Não foi possivel realizar o POST",
          erro: "BODY indevido!",
        });
      }
      res.status(200).json(req.body);
}