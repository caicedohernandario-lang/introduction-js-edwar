// hernan caicedo
// destructuracion de objetos

const product = {
    producName : "sensor de humedad",
    price : 300,
    available : true,
    
}

// aqui  un ejemplo de destructuracion de objetos
const productprice  = product.price;
const productName = product.producName;


console.log(productprice);
console.log(product.producName);

// sirve el destructurig para extrar los valores de un objeto

const {price, available, producName} = product;

console.log(price, available, productName);