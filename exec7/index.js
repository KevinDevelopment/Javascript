
const myList = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13];
const myList2 = [-10, 4 - 34, 56, -89, -45, -33, -4, 5, 8, 10];

filterNegativenumbers = (array) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}


filterNegativenumbers(myList);
filterNegativenumbers(myList2);
