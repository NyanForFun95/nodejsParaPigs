var array = [
    1,
    2,
    3,
    4,
    5,
    'string',
    true,
    [
        'hola',
        2
    ]
];

array.push(10);

// console.log(array);

// console.log(array.length);

// console.log(array[0], array[5], array[7][0]);

var contador = '';

for(i in array){
    // console.log('el elemento',i, 'es:',array[i]);
    contador += i;
};

// console.log(contador);

//------

var obj = {
    entero: 10,
    cadena: 'hola',
    booleano: false,
    array: [1],
    objeto: {
        ola: 'kase'
    }
};

// console.log(obj, obj.cadena, obj['cadena'], obj.array.length);

// console.log(Object.keys(obj), Object.values(obj));

obj.flotante = 0.01;

// obj.booleano = undefined;

// console.log(obj);

for(j in obj){
    console.log(typeof obj[j]);
};
