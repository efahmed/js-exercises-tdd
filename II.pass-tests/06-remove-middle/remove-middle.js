function removeMiddle(arr) {
  var x = arr[(arr.length - 1) / 2];
  var a = [];
  arr.splice((arr.length - 1) / 2, 1);
  return (a = [x]);
}
module.exports = removeMiddle;
