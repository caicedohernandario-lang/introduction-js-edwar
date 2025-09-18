//  HERNAN CAICEDO
// metodos para los objetos
// con esta linea de codigo garantizo buenas practicas
"use strict"

const product = {
    producName : "sensor de humedad",
    price : 300,
    available : true,
    
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

// aunque el objeto ees declarado como constante permite agregar 
// propiedades
product.quantity = 42;
console.log(product);

// con el metodo o funcion freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas o modificarlas
// Object.freeze(product);

// si usamos el metodo seal no podemos agragar ni elimina pero si editar o modificaar una propiedad.
Object.seal(product);

// vamos a agaregar un nueva propiedad color 
// product.color = "red";

// forma de saber si un objeto esta bloqueado
// console.log("el objeto esta bloquedo:" + Object.isFrozen(product));

let response
if (Object.isFrozen(product)){
    response = "si";
} else {
    response = "no"
}

console.log("el objeto esta bloquedo:" + response);

// eliminar un propiedad de un objeto
// delete product.price;
// console.log(product);

// modificar o editar las propiedades de un objeto
product.producName = "sensor de PH";
console.log(product)

// saber si un objeto esta sellado
console.log("el objeto esta sellado:" + Object.isSealed(product));