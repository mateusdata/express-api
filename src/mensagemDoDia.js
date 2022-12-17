let dados = require("./dados");

const RetornarMensagem  = (dia) => {
    return dados.frases[ dia - 1 ]
}
//esse arquivo é a camada de serviço
exports.RetornarMensagem = RetornarMensagem;