// Escribe una función que te genere un array que tenga los primeros n números de Fibonacci. Genera un array con la cantidad de divisores de los primeros 100 números de Fibonacci.

//function fibonacci(number){;
//   let fibonacci = 0;
//   for (let a = 0; a<=number; a++){;
//       fibonacci + (fibonacci)
//    }; 
//    return fibonacci;
    
//};


function divisores (length) {
   let aux = length;
   while (aux + aux  >100){
      length++;
      aux = 1;
   };
   return length;
};

var fibonacci = [1,1];

while(divisores(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])<100){
   fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]);
};

console.log(fibonacci.length)