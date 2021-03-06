// Una función es un fragmento de código que se va a ejecutar cuando se llame.

// Una función de nombre print se declara:

function print(something){
    console.log(something);
};

// La función se llama al pasarle argumentos:

// print('cho es pig');

// Podemos pasarle mas de una cosa:

function print2(something, somelse){
    console.log(something,somelse);
};

// Y se llama al pasarle los argumentos:

// print2('el número', 2**12);

// También podemos hacer que regrese algo usando el return:

function exp(a,b){
    return a**b;
};

// print(exp(2**12,.5));

// También podemos declarar defaults.

function sum(a,b=1){
    return a + b;
};

// print(sum(2**12,-64));
// print(sum(1));

// las funciones tambien pueden ser recursivas. (i.e. que se llamen a si mismas)

function factorial(n){
    if(n == 1){
        return 1;
    } else {
        return factorial(n-1)*n;
    };
};

// print(factorial(6));

function fibonacci(n){
    if(n > 1){
        return fibonacci(n-2) + fibonacci(n-1);
    }else{
        return 1
    };
};

// console.log(fibonacci(10),fibonacci(11),fibonacci(12));
