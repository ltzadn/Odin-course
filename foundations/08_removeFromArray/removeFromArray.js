const removeFromArray = function (array, ...elementToRemove) {
  return array.filter((elem) => !elementToRemove.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
