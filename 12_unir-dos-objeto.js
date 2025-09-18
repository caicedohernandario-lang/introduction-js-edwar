// cuando se uno los objetos lo ideal es no modificar ninguno de los dos objetos

const product = {
    producName : "sensor de humedad",
    price : 300,
    avalable : true
}

Object.freeze(product);

//objecto que almacena las medidas
const measurement = {
    weight : '1kg',
    height : '10cm',
}

//rest operator,consta de (...)

const newproduct = {...product, ...measurement};

console.log(product);
console.log(newproduct);
