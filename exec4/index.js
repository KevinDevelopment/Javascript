
//soma de array com numeros negativos e positivos

const myList = [10, -30, 56, -3, -45, -67, 89, 2, 4, 6, 7, 19, 34]

let sumOfNumbersInArray = 0;

myList.map((item) => {
  sumOfNumbersInArray += item;
})

console.log(`array sum with negative and positive numbers = ${sumOfNumbersInArray}`);

console.log("------------------------------------------------------------------------------")

//soma de array com numeros inteiros e decimais

const myListOfDecimalsAndIntegers = [10, 1.9, 34, 34.67, 1.7, 1.99, 34.78, 90, 100, 1.1, 34.5, 67.8]

let sumOfNumbersInArrayOfDecimals = 0

for (i = 0; i < myListOfDecimalsAndIntegers.length; i++) {
  sumOfNumbersInArrayOfDecimals += myListOfDecimalsAndIntegers[i];
}

console.log(`array sum with integers and decimals = ${sumOfNumbersInArrayOfDecimals}`);

console.log("-------------------------------------------------------------------------------")

//soma de matriz com numeros positivos e negativos 

const myMatrix = [
  [10, -40, 45],
  [-34, -45, -2],
  [10, 56, 67]
];

let sumOfAllNumbersInTheMatrix = 0;

for (row = 0; row < 3; row++) {
  for (column = 0; column < 3; column++) {
    sumOfAllNumbersInTheMatrix += myMatrix[row][column];
  }
};

console.log(`matrix sum with negative and positive numbers = ${sumOfAllNumbersInTheMatrix}`);

console.log("--------------------------------------------------------------------------------------")

//soma de matriz com numeros inteiros e decimais

const matrixWithDecimalsAndIntegers = [
  [10, 40.56, 67.90],
  [45, 1000.1, 5],
  [89, 67, 90]
]

let matrixSumWithIntegersAndDecimals = 0;

for (row = 0; row < 3; row++) {
  for (column = 0; column < 3; column++) {
    matrixSumWithIntegersAndDecimals += matrixWithDecimalsAndIntegers[row][column];
  }
};

console.log(`matrix sum with integers and decimals = ${matrixSumWithIntegersAndDecimals}`);

console.log("--------------------------------------------------------------------------------------")

