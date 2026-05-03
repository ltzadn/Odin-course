const repeatString = function (string, num) {
  const isStringAvaiable = typeof string === 'string';
  const isNumAvaiable = typeof num === 'number' && num >= 0;

  if (isStringAvaiable && isNumAvaiable) {
    let result = '';
    for (let i = 0; i < num; i++) {
      result += string;
    }
    return result;
  }

  return 'ERROR';
};

module.exports = repeatString;
