function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number; 
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  write a function that takes an array and a target interger as arguments
  if sum of pair of numbersin array add up to target interger:
    return true
    else
    return false
*/

/*
  Add written explanation of your solution here
  Write a function called hasTargetSum, it should receive two arguments that are: an array of integers and a target integer. The function is supposed to return true if any pairs of numbers in the array adds up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
