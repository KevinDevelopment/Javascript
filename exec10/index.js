getNumberOfVowels = (string) => string.match(/[aeiou]/gi).length;
getNumberOfCharacteres = (string) => string.replace(/\s/g, '').length;

const myString = "kevin cristhian gomes ferreira";

console.log(`o numero de vogais é ${getNumberOfVowels(myString)} e a quantidade de caracteres ${getNumberOfCharacteres(myString)}`);


