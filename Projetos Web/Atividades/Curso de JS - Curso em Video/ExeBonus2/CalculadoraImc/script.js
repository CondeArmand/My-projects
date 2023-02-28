function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = imc.toFixed(2);
    if (imc < 18.5) {
        resultado.innerHTML += " - Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML += " - Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML += " - Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML += " - Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML += " - Obesidade grau 2";
    } else if (imc >= 40) {
        resultado.innerHTML += " - Obesidade grau 3";
    }
}