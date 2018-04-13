export const max = (arrayDeInteiro) => {
  if (Array.isArray(arrayDeInteiro)  && arrayDeInteiro.length != 0) {
    for (let index = 0; index < arrayDeInteiro.length; index++) {
      if (typeof arrayDeInteiro[index] != 'number'){
        return "Mensagem de erro.";
        break;
      }    
    }
    return Math.max(...arrayDeInteiro);
  } 
    return "Mensagem de erro.";
};

// usar propriedade da linguagem javascript para verificar se existir vetor 
// E tambem se o vetor nao é vazio. 
