// Escribe una función que te genere un array que tenga los primeros n números de Fibonacci. Genera un array con la cantidad de divisores de los primeros 100 números de Fibonacci.

//function fibonacci(number){;
//   let fibonacci = 0;
//   for (let a = 0; a<=number; a++){;
//       fibonacci + (fibonacci)
//    }; 
//    return fibonacci;
    
//};

function fibonacci(number){
  if(number==1){
    return [1];
  }else{
    let fibonacci = [1,1];
    while(fibonacci.length < number){
      fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]);
    };
    return fibonacci;

  };

};

function countDivisors(number){
  let count = 0;
  for(let i = 1; i<=number; i++){
      if(number%i==0){
          count++;
      };
  };
  return count;
};

//var numero = 100;

for(var a = 1; a<=100; a++){
  if(a%1==0){
      console.log(a);
  }else{
      console.log('):')
  };
//};


console.log('Los números', fibonacci(numero), 'tienen', countDivisors(), 'divisores');


//function divisores (length) {
//  let aux = length;
//  while (aux + aux  >100){
//    length++;
//    aux = 1;
//  };
//  return length;
//};