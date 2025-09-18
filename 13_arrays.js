//arrays js

const numbers =[10,20,30,80,100,7,8];

console.log(numbers);

//otra forma de visualizacion en table
console.table(numbers);

//crear un arreglo con el constructor
const months = new Array('may','january', 'july', 'june');

console.table(months);

const miArray = ['hello',42,true, false, null, {myName: "hernan", myjob:"student"},[3172293]];

console.log(miArray);

//consultar un elemento de un arreglo
console.log(numbers[2]);
console.log(miArray[5]);

//metodo para conocer la longitud de un arreglo
console.log("Hernan su arreglo tiene: " + numbers.length + " elementos");

// un iterador con foreach
numbers.forEach(function(number){
    console.log(number);
});

months.forEach(function(month){
    console.log(month);
});

miArray.forEach(function(element){
    console.log(element);
})