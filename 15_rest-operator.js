 // Rest operator o spread operator
 // Lo que se busca es NO NO NO modificar el arreglo original.

 const months = ['December', 'November', 'March'];
 console.table(months);

 //Se creea un nuevo arreglo y lo unimos con otro.
 const newArray = [...months, 'january'];

 //el nuevo arrglo se puede agreagar al final o al inicio
 const newArray2 = ['january', ...months];


 console.table(newArray);
 console.table(newArray2);

months.unshift('january');
console.table(months);
months.push('january');
console.table(months);



