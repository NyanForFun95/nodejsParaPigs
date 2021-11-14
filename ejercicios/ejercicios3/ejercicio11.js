// escribe una función que calcule el elemento a_n de la regla a_0 = 0, a_(n+1) = a_n + 1 + a_n, genera un array con los primeros 20 elementos aumentados en 1, ¿Qué puedes notasr de éstos elementos?

//function elemento(number){
    //let elemento = 1;
    //for(let a = 1; a<=number; a++){
//  };
//    return elemento; 
//};

//console.log(elemento(10))

function elemento(n){
    if(n == 0){
        return 0;
    } else {
        return elemento(n-1) + 1 + elemento(n-1);
    };

};

var array = [
    
];

for(var a = 1; a<=20; a++){
    array.push(elemento(a)+1);
};

console.log(array)