

trueOrFalse = (number) => {

  if (number % 10 == 0) {
    return true;
  } else {
    return false;
  }

};

const result = trueOrFalse(9);
console.log(result);