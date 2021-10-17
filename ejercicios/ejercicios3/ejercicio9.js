// Escribe una función que te regrese el factorial de numero n. Imprime los números 12!, 21!, 13!+17!

function factorial(number){
    let factorial = 1;
    for(let a = 1; a<=number; a++){
        factorial = factorial * a;  //*=
    };
    return factorial; 
};

console.log(factorial(12));
console.log(factorial(21));
console.log(factorial(13)+factorial(17));
