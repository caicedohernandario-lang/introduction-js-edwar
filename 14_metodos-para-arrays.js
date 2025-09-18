
"use strict"
 const numbers =[0, 5, 8, 9, 5, 3, 456,1];

 //Agragar elementos a mi arreglo, pero con este metodo se requiere conocer la longitud del arreglo
//  let numberslenght = numbers.length
//  console.log(numberslenght) 

//  numbers [numberslenght] = 100;

//  console.log(numbers);

//con el metodo push se agregan elementos al final del arreglo
numbers.push(700,800);

// console.log(numbers);

//Métodos unshift para agregar elemntos al inicio de un arreglo
numbers.unshift(-1, -2, -3);

//Método para para eliminar el último eleento de mi arreglo
// numbers.pop();
// console.table(numbers);

//Método shifh para eliminar el primer el elemnto de mi arreglo
// numbers.shift();
// console.table(numbers);

//Método splice elimina todos los elementos a partir del indice asignado
numbers.splice(5);
console.table(numbers);


