var getSecondThird = require("./get-second-third.js");

test("Get numbers greater than 10", function() {
  var input = [90, 5, 11, 8, 6];
  expected = [6, 8];
  var output = getSecondThird(input);
  expect(output).toEqual(expected);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
