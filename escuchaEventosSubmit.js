const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const calcu1 = document.querySelector('#calculo1');
const calcu2 = document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = calcu1.value + calcu2.value;
    resultado.innerText = "Resultado: " + sumaInputs; 
}