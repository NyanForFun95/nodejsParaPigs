function factorial(n){
  if(n == 1){
    return 1;
  } else {
    return factorial(n-1)*n;
  };
};

function is_prime(n){
  if(n%2 == 0){
    return n == 2;
  }else{
    for(let i = 3; i <= n**.5; i = i + 2){
      if(n%i==0){
        return n == i;
      };
    };
    return true;
  };
};

function fibonacci(n){
  if(n > 1){
    return fibonacci(n-2) + fibonacci(n-1);
  }else{
    return 1;
  };
};

function factorize(n){
  let aux = n;
  let contador = 0;
  let factorizado = {};
  while(aux%2 == 0){
    aux /= 2;
    contador++;
  };
  if(contador > 0){
    factorizado[2] = contador;
  };
  for(let i = 3; i <= aux**.5; i = i + 2){
    contador = 0;
    while(aux%i == 0){
      aux /= i;
      contador++;
    };
    if(contador > 0){
      factorizado[i] = contador;
    };
  };
  if(aux > 1){
    factorizado[aux] = 1;
  };
  return factorizado;
};

function countDivisors(n){
  let factors = factorize(n);
  let count = 1;
  for(i in factors){
    count *= factors[i]+1;
  };
  return count;
};

module.exports = {factorial, is_prime, fibonacci, factorize, countDivisors};
