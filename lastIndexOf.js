/* Create a function to check the last index of an item in an array. Do not use
indexOf() and return -1 if the value is not seen in the array. */

const lastIndexOf = function(array, num) {
// Sets the initial return value to -1 if the checked values do not match.
  let index = -1;
  for (let i = 0; i < array.length; i++){
    if(array[i] === num){
      index = i;
    }
  }
  return index; 
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);