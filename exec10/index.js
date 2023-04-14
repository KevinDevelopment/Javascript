returnNumberOfVowels = (string) => { 

  const count = string.match(/[aeiou]/gi).length;
  const numberOfCharacters = string.replace(/\s/g, '').length;

  console.log(`o numero de vogais é ${count} e a quantidade de caracteres ${numberOfCharacters}`);
}

returnNumberOfVowels("Abecedario da Xuxa");



