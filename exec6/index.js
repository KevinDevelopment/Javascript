

const myList = [0, 30, 10, 5, 6, 1, 4, 2, 3];
const myList2 = [-1,-10,-3,-6,-20,-45,-100];
const myList3 = [1.0,10.45,56.34, 3.2, 5.0,6.0,7.89];


myList.sort(function (a, b) { // classificando um array com o método sort que recebo como parâmetro uma funçaõ

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;

});

sortArray = (array) => { //função que classifica do menor para o maior

  array.sort(function (a, b) {

    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

  })

  console.log(array);

}

// sortArray(myList);
// sortArray(myList2);
// sortArray(myList3);


