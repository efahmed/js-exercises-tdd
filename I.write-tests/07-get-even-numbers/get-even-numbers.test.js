var getEven = require("./get-even-numbers.js");

test("Get Even Numbers", function() {
  var input = [22, 13, 73, 82, 4];
  expected = [22, 82, 4];
  var output = getEven(input);
  expect(output).toEqual(expected);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
