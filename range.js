/* Create a function that creates arrays using a start, stop, step parameter.
Return an empty array if values are filled in incorrectly.
*/
const range = function(start, end, step) {
//If statements to check correct parameters
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }
  // Creating the array to return. Value always starts at the assigned value.
  let array = [start];
  for (let i = 0; array[array.length - 1] < end; i++) {
    // Checking to ensure the end result doesn't not exceed the specified end.
    if (array[i] + step > end) {
      break;
    } else {
      array.push(array[i] + step);
    }
  }
  return array;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));