let express = require("express");
let app = express();
let calculadora = require("./src/calculadoraImc");
let verificarStatus = require("./src/statusImc");
let conversorMoeda = require("./src/coverterMoedas");
let arrayEmail = require("./src/users/user")
const PORT = process.env.PORT || 5050;

let data = new Date();
const mensagemDia = require("./src/mensagemDoDia");
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
  const dia = data.getDate();
  const mensagemSelecionada = mensagemDia.RetornarMensagem(dia);
  res.json({ mensagemSelecionada });
});

app.get("/imc", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
  let peso = req.query.peso;
  let altura = req.query.altura;

  if (
    calculadora.validarParametro(req.query.peso) &&
    calculadora.validarParametro(req.query.altura)
  ) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
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
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
  if (
    conversorMoeda.validarApi(req.query.cel) &&
    conversorMoeda.validarApi(req.query.fah)
  ) {
    console.log(req.query);
    let conversorCelsius = conversorMoeda.grauscelsius(req.query.cel);

    let conversorFahrenheit = conversorMoeda.grausFahrenheit(
      req.query.fah
    );

    res.json({ fahrenheit: conversorCelsius, celcios: conversorFahrenheit });
  } else {
    res.status(400).json({ Erro: "Somente numeros sao perminido" });
  }
});

app.get("/user", (req, res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
  res.json(arrayEmail)
})

app.listen(PORT, () => {
  console.log("Servidor iniciado\n");
});
