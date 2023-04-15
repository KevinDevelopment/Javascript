function getPairNumbers(number, finalNumber) {
  if (number % 2 == 0) {
    console.log(number);
  }

  if (finalNumber - number <= 0) {
    return;
  }

  getPairNumbers(number + 1, finalNumber);
}

getPairNumbers(0, 10000);

