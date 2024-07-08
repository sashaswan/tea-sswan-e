// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
  }
  
  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to convert kilometers to miles
  function kilometersToMiles(km) {
    return km * 0.621371;
  }
  
  // Function to calculate the power of a number
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to capitalize the first letter of each word in a string
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Function to count the number of vowels in a string
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  console.log(multiply(3, 4)); // Output: 12
  console.log(isPrime(7)); // Output: true
  console.log(kilometersToMiles(5)); // Output: 3.106855
  console.log(power(2, 3)); // Output: 8
  console.log(getRandomNumber(1, 10)); // Output: a random number between 1 and 10
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  console.log(countVowels("hello world")); // Output: 3
  