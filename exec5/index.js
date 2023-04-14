
//função que reverte um array ou matriz usando o método reverse

const myList = [5,4,3,2,1];
const myList2 = [1,2,3,4,5,6,7,8,9];

const myList3 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

matrixInverter = (array) => {
  const result = array.reverse();
  return console.log(result);
}

matrixInverter(myList);

console.log("---------------------------------------------------")

matrixInverter(myList2);

console.log("---------------------------------------------------")

matrixInverter(myList3);




