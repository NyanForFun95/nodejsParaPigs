// ¿Cuántos dígitos tiene el número 20!? (Pista: Piensa en la expansion decimal [ex. 12345 = 1*10000 + 2*1000 + 3*100 + 4*10 + 5*1])

// var cifras = 1;
// while(23**4 + 123**3 >= 10){
//    23**4 + 123**3 >= 23**4 + 123**3/10
//    cifras++
// }
 
function digitCount (number) {
    let cifras = 1;
    let aux = number;
    while (aux - aux%10  >0){
       cifras++;
       aux = (aux-aux%10)/10;
    };
    return cifras;
 };
 
 function digitCountDec (number) {
    let cifras = 1;
    let aux = 10;
    while(aux <= number){
       cifras += 1;
       aux *= 10;
    };
    return cifras;
 };
 
 var numero = 1;
 
 for(let i = 1; i<=20; i++){
    numero *= i;
 };
 
 console.log('el número', numero, 'tiene', digitCountDec(numero), 'cifras');
