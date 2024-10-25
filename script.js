const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClase = document.querySelector('.parrafo');
const parrafoId = document.getElementById('pid');
const escribeAlgo = document.querySelector('input');

//console.log(escribeAlgo.value)
//console.log(h1);

console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    escribeAlgo,
});

//h1.innerHTML = 'Cambio de <br> Texto'; //Cuando modificas el html como html.
h1.innerText = 'Cambio de <br> Texto'; //Cuando modificas el html pero se muestra como texto en la web.

//console.log(h1.getAttribute('pantalla'));//Forma para leer los atributos de un elemento.
h1.setAttribute('pantalla', 'GamingMaximus');//Forma para modificar los atributos de los elemtos.

h1.classList.add('chocolatin');//Agrega una clase a la variable.
h1.classList.remove('chocolatin');//Quita una clase a la variable.
//h1.classList.toggle('leche');//Agrega una clase si esta no existe aun o la eliminar[a si ya existe.
//h1.classList.contains('leche');//contains devuelve un true si la clase existe o un false si no existe.

escribeAlgo.value = "123";//'escribeAlgo' es la variable de input, etonces al usar la propiedad value estamos modificando en el DOM su placeholder

const img = document.createElement('img');//Creamos el elemento html img que se alamcena en una constante con nombre img
img.setAttribute('src', 'https://th.bing.com/th/id/R.1d1989df4eb8e94ab9ff0ef849105b36?rik=ZLv3zPg0i7Phrg&pid=ImgRaw&r=0');//a esa variable que almacena el nuevo elemento img le agregamos con el setAttrubute el link de donde jala la imagen.
console.log(img);

parrafoId.innerHTML = "";//Borra el contenido que esta dentro de la etiqueta p con un id y como esta como comillas vacias es popr eso que desaparece
parrafoId.append(img);//append permite añadir uno o más nodos o elementos al final del contenido, en este caso agrega una imagen pero para que la imagen se agregue debió ser previemente creado (como se ve arriba línea 32).

