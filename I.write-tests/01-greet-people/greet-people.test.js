var printListOfNames = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var expected = "Hello IrinaAshleighEtza";
  // Act
  var output = printListOfNames(mentors);
  // Assert
  expect(output).toEqual(expected);
});
