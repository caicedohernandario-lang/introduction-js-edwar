// HERNAN CAIVEDO
// Obketos en js

//Aqui tenemos tres variables
const producName = "sensor de humedad";
const price = 300;
const available = true;

const product = {
    producName : "sensor de humedad",
    price : 300,
    available : true,
    
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

// para aceder a ls diferentes propiedades de un objeto
// lo hacemos de la siguiente manera:

console.log("el nombre del producto es: " + produc.producName);
console.log("el precio del producto es: " + produc.price);
console.log("el producto esta disponible: " + produc.available);

//agregar propiedades al objeto 
product.image = 'imag.jpg';
console.log(product);