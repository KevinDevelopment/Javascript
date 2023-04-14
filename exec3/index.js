
lengthconverter = (kilometer) => {
  const mileValue = 1.609;
  const result = kilometer / mileValue;
  console.log(result.toFixed(2));
}

lengthconverter(100);
