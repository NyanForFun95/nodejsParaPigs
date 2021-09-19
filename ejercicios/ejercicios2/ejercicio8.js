// ¿Cuántos divisores tiene el número 23**4 + 123*3?

// var obj = {
//     divisores: []
// };

// for(let a = 1; a <= 23**4 + 123**3; a++){
//     if(a% == 1){
//         obj.divisores.push(a);
//     };

    
// };

// var array = [
    
// ]

function countDivisors(number){
    let count = 0;
    for(let i = 1; i<=number; i++){
        if(number%i==0){
            count++;
        };
    };
    return count;
};

var numero = 23**4 + 123*3;

console.log('El número', numero, 'tiene', countDivisors(numero), 'divisores');