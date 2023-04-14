
const myList = [" ola mundo ", "  espaço em branco", "  remover espaço", " teste de remoção"];//sequencia com espaços


myList.forEach(item => {
  console.log(item);
});


console.log("------------------------------------------------------------------------------")

console.log("array depois da limpeza de dados e espaços retirados : \n")

removeEmptySpaces = (array) => { //funcão para tirar espaços em branco de cada string do array

  array.forEach((item) => { 
    console.log(item.trim());//função trim remove espaços no começo e final das strings
  })


}

wipeData = (dado, type) => {//função que limpa codigo postal retirando espaços vazios

  if (type == "postal code") {
   return dado.replace(" ", "");
  } else {
    return dado.replace(" ", "");
  }

}

removeEmptySpaces(myList);

console.log("----------------------------------------------------------------------------------")

const result = wipeData("08247 056", "postal code");
console.log(result);

