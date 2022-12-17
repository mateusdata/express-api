function grauscelsius(c) {
  let fahrenheit = c * 1.8 + 32;
  return fahrenheit;
}
exports.grauscelsius = grauscelsius;

function grausFahrenheit(f) {
  let celsius = ((f - 32) * 5) / 9;
  return celsius;
}
exports.grausFahrenheit = grausFahrenheit;

function validarApi(x, y) {
  if (isNaN(x) && isNaN(y)) {
    return false;
  } else {
    return true;
  }
}
exports.validarApi = validarApi;
