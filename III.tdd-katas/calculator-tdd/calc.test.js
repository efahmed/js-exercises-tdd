const calc = require("./calc.js");

// ### Step 6: ignore big numbers
// Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
test("empty string", function() {
  expect(calc("")).toEqual(0);
});
test("add one number", function() {
  expect(calc("1")).toEqual(1);
});
test("add two numbers", function() {
  expect(calc("1,2")).toEqual(3);
});

test("add many numbers", function() {
  expect(calc("1,2, 6, 2, 8")).toEqual(19);
});

// test("add numbers in multiple lines", function () {
//     expect(calc("1\n2,3")).toEqual(6);
// });
// test("add numbers in multiple lines", function () {
//     expect(calc("//;\n1;2")).toEqual(3);
//     expect(calc("//0\n102")).toEqual(3);
//     expect(calc("//5\n152")).toEqual(3);
// });
// test("throwing exception for negative values", function () {
//     expect(() => calc("1,4,-1")).toThrow("negatives not allowed: -1");
// });
// test("throwing exception for multiple negative values", function () {
//     expect(() => calc("1,4,-1,-3")).toThrow("negatives not allowed: -1,-3");
// });
// test("ignore big numbers, greater than 1000", function () {
//     expect(calc("1001,2,5,2000")).toEqual(7);
// });
