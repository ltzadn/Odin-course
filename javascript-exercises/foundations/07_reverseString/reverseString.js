const reverseString = function (string) {
  const reversedSplitedSentence = string.split('').reverse();

  return reversedSplitedSentence.join('');
};

// Do not edit below this line
module.exports = reverseString;
