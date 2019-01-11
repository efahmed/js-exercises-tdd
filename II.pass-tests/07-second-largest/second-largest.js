// number.sort(function(a, b) {
//   return a - b;
// });
// var x = number[(number.length-2)];
function secondLargest(arr) {
  var secondLargest = arr.sort(function(a, b) {
    return b - a;
  })[1];
  return secondLargest;
}
module.exports = secondLargest;
