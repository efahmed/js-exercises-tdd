var getLargestNumber = require("./largest-number.js");

test("Get Largest Numbers greater in the Array", function() {
  var input = [3, 21, 88, 4, 36];
  expected = 88;
  var output = getLargestNumber(input);
  expect(output).toEqual(expected);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
