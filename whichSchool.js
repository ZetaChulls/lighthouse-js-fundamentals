/* Creating a function to determine which school someone should attend based on age. Top commented out version is using if/else while bottom is ternary operator practice.
const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else if (age > 18) {
    return "Lighthouse Labs";
  }
}
*/

const whichSchool = function(age) {
  return age < 13 ? "Elementary School" : (age > 18 ? "Lighthouse Labs" : "Secondary School");
  // Checks the age and returns "Elementary School" if below 13, "Secondary School" if between 13 & 18, and "Lighthouse for all else"
};

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));