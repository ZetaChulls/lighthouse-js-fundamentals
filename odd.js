// Function to determine if an input is an odd value. Will return True if the input is odd and False if even

const isOdd = (num) => {
  return num % 2 === 1;
};

// Testing statements
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));