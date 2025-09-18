//  alert("estoy en hello word")
//  Conveciones para nombrar variables
// CamelCase
// UperCamelCase => se usas para nombrar clases en JS
// LowecameCase => se usas para nombrar las variables en JS
// SCREAMING_SNAKE_CASE => se usa para nombrar las variable constantes JS

// snake_case => generalmente usado para nombrar variables en el lenguanje Phyton
// caja-kebab => se usa para nombrar archivos multimedia en JS
// Caja-De-Tren => es una variante del kebab-casse
 // ya no se usa var para nombrar las variables , actualmente se usa let
 // en js mp es obligatorio indicar el tipo de variable
 //JS  se puede o uno usar el punto y com al final de una sentencia 
 
var product ='sensor-1';
var product2 ='sensor-2';

console.log(product);
console.log(product2);

//no se puede iniciar  una variable con guion medio
// var -sensor = "sensor-3";

//no se puede iniciar una variable con numero
// var 1sensor= "sensor-4"

var _sensor="sensor-5"

//si esta permitido iniciar una variable con guion al piso
console.log(_sensor);

//crean una variable de la tres formas distintas

// var sensor10 = " sensor de llvia";
// const sensor10 = " sensor de llvia"; 
let sensor10= " sensor de llvia";

console.log(sensor10)

//ejemplo var
 //no me indica error por duplicidad de variables 
// var sensor11= "sensor de humedad";
// var sensor11= "sensor de humedad";

// console.log(sensor11);

//let no permite duplicidad de variables
// let sensor12="sensor de velocidad"
// let sensor12="sensor de luz"
 
//no muestra error por falta de inicializacion
// var username="Hernan";
// console.log(username);

// console.log(username);
//let username="hernan";

//usanod la declariacion cons No se puede canviar su valor
const mavSive = 1024;
mavSive =1024;
 
console.log(mavSive);
