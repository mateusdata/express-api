let express = require("express");
let app = express();
let calculadora = require("./src/calculadoraImc");
let verificarStatus = require("./src/statusImc");
let conversorMoeda = require("./src/coverterMoedas");
const PORT = process.env.PORT || 5050;
let data = new Date();
const mensagemDia = require("./src/mensagemDoDia");
app.get("/", (req, res) => {
  const dia = data.getDate();
  const mensagemSelecionada = mensagemDia.RetornarMensagem(dia);
  res.json({ mensagemSelecionada });
});

app.get("/imc", (req, res) => {
  let peso = req.query.peso;
  let altura = req.query.altura;

  if (
    calculadora.validarParametro(req.query.peso) &&
    calculadora.validarParametro(req.query.altura)
  ) {
    console.log(req.query);
    let imc = calculadora.calculadoraImc(peso, altura);
    let status = verificarStatus.statusPeso(imc);
    let json = { imc: imc, status: status };

    res.json(json);
  } else {
    res.status(400).json({ Erro: "Dados ivalidos" });
  }
});

app.get("/temperatura", (req, res) => {
  if (
    conversorMoeda.validarApi(req.query.celsius) &&
    conversorMoeda.validarApi(req.query.fahrenheit)
  ) {
    console.log(req.query);
    let conversorCelsius = conversorMoeda.grauscelsius(req.query.celsius);

    let conversorFahrenheit = conversorMoeda.grausFahrenheit(
      req.query.fahrenheit
    );

    res.json({ fahrenheit: conversorCelsius, celcios: conversorFahrenheit });
  } else {
    res.status(400).json({ Erro: "Somente numeros sao perminido" });
  }
});

app.listen(PORT, () => {
  console.log("Servidor iniciado\n");
});
