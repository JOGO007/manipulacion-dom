const h1 = document.querySelector('h1');
const calcu1 = document.querySelector('#calculo1');
const calcu2 = document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

function btnOnclick(){
    const sumaInputs = calcu1.value + calcu2.value;
    resultado.innerText = "Resultado: " + sumaInputs; 
}