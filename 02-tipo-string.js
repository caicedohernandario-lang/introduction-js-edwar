// Strings o cadena de texto
const sensor = "temperatura";
const sensor2 = 'PH';

console.loge(sensor);
console.log(sensor2);
// estas dos formas NO son tan comunes
const sensor3 = stirngs('presion');
const sensor4 = new String('huemedad'); 

console.log(sensor3);
console.log(sensor4);

//para saber el tipo de dato de una variable
console.log(typeof sensor3);

let product =("televisor de 32\"");
let product2 =("televisor de 58\"");
console.log(product);
console.log(product2);

//metodos con string
console.log(product2.length);

let username=("Hernan Cario Caicedo Guaitoto");
console.log(username.length);

//sirve para saber si una cadena de texto existe en una frase
//indexof nos muestra la posicion en la que se encuentra la cadena de texto
// si la cadenan de texto no existe muestra un menor que cero
let phrase = 'aqui vamos a buscar la palabra sena'
console.log(phrase.indexOf('sena'));

//hacer lo mismo de una forma mas moderna,el resultado es true o un false
let phrase2 = "aqui vamos a buscar la palabra sena"
