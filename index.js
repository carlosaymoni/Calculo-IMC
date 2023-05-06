let btn = document.getElementById('btn');

btn.addEventListener('click', () => {

  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;
  let diagnostic = document.getElementById('diagnostics');

  if (peso && altura) {

    let calc = peso / (altura * altura);
    let imc = document.getElementById('imc').textContent = calc.toFixed(2);

    if (imc <= 18.5) {
      diagnostic.textContent = 'Bajo peso';
    } else if (imc <= 24.9) {
      diagnostic.textContent = 'Peso saludable';
    } else if (imc <= 29.9) {
      diagnostic.textContent = 'Sobrepeso';
    } else if (imc <= 34.9) {
      diagnostic.textContent = 'Obesidad grado 1';
    } else if (imc <= 39.9) {
      diagnostic.textContent = 'Obesidad grado 2';
    } else if (imc >= 40) {
      diagnostic.textContent = 'Obesidad grado 3';
    } else {
      diagnostic.textContent = 'Error';
    }

  } else {
    alert("Por favor, complete los datos");
  }
})