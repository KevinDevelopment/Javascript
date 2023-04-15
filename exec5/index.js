
//função que reverte um array ou matriz usando o método reverse

const myList = [5, 4, 3, 2, 1];
const myList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myList3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrixInverter = (array) => {

  let result = [];

  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(array[i].reverse());
    }
  }

  result = array.reverse();
  return result;
}

console.log(matrixInverter(myList)) 

console.log("---------------------------------------------------")

console.log(matrixInverter(myList2)) 

console.log("---------------------------------------------------")

console.log(matrixInverter(myList3)) 




