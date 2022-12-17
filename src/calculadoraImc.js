function calculadoraImc(peso, altura) {
  let imc = peso / (altura * altura);

  return Number(imc.toFixed(2));
}
exports.statusPeso = statusPeso;

function statusPeso(imc) {
  let status;

  if (imc < 18.5) {
    status = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    status = "Peso Normal";
  } else if (imc >= 24.9 && imc < 30) {
    status = "Acima do peso";
  } else {
    status = "Obeso";
  }

  return status;
}
exports.calculadoraImc = calculadoraImc;

function validarParametro(paramentro) {
  if (isNaN(paramentro)) {
    return false;
  } else {
    return true;
  }
}
exports.validarParametro = validarParametro;
