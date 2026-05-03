const sumAll = function (firstNum, secondNum) {
  if (
    typeof firstNum !== 'number' ||
    firstNum < 0 ||
    !Number.isInteger(firstNum) ||
    typeof secondNum !== 'number' ||
    secondNum < 0 ||
    !Number.isInteger(secondNum)
  ) {
    return 'ERROR';
  }
  let result = 0;
  const start = Math.min(firstNum, secondNum);
  const end = Math.max(firstNum, secondNum);

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
