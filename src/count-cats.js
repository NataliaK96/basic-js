module.exports = function countCats(matrix) {
  
  let array = matrix.flat();
  let number = 0;
  array.forEach(
    function (item) {
      if (item == '^^') {
        number++
      }
    }
  )
  return number

};
