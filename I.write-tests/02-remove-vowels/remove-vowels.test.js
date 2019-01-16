var removeVowels = require("./remove-vowels.js");
test("remove vowels from Hi", function() {
  // Arrange
  var removeVowel = "Hi";
  var expected = "_i";
  // Act
  var output = removeVowels(removeVowel);
  // Assert
  expect(output).toEqual(expected);
});
// TextTrackList.only("if does not remove y from the word, function(){
// var letterY = "y";
// var expected = "y";
// var output removeVowels(letter);
// expected(output).toEqual(expected);
// })
// TextTrackList.only("if does not remove y from the word, function(){
// var letterY = "y";
// var expected = "y";
// var output removeVowels(letter);
// expected(output).toEqual(expected);
//test uppercase
// test("remove uppercase vowel", function() {
//   var removeUpper = "HI";
//   var expected = "H";
//   var output = removeVowels(removeUpper);
//   expected(output).toEqual(expected);
// });
// //test special char
// test("remove special characters", function() {
//   var removeSpecialChars = "~!@#$%^&*()-_=+[]{}|;':";
//   var expected = "";
//   var output = removeVowels(removeSpecialChars);
//   expected(output).toEqual(expected);
// });
//test5 all vowels
// test("check all consonants", function() {
//   var keepCons = "BCDFGHJKLMNPQRSTVXZ";
//   var expected = "BCDFGHJKLMNPQRSTVXZ";
//   var output = removeVowels(keepCons);
//   expected(output).toEqual(expected);
// });
