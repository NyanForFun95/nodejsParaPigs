// ¿Cuántos números de Fibonacci tienen menos de 200 dígitos?

function digitCount (number) {
    let cifras = 1;
    let aux = number;
    while (aux - aux%10  >0){
       cifras++;
       aux = (aux-aux%10)/10;
    };
    return cifras;
};

var fibonacci = [1,1];

while(digitCount(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])<200){
    fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]);
};

console.log('hay', fibonacci.length,'números de fibonacci con menos de 200 dígitos')