function reverse(word){
  const wordArray = word.split("");
  const reversedWordArray= wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord;
    
}

  // Write your algorithm here
  


/* 
  should take in a string, then reverse the string
  if the reverse string === original string then return true
  else return false

  Add your pseudocode here
*/

/*
first I split my string into an array of individual letters. 
Then I reversed the order of the array.
Then I joined the reversed array back into a string.
then I returned the reversed word.
after that I sent the reversed word through a function
the function is an if else in which
if reversed word is the same as the word then true
if reversed word is not the same then false
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ablewasiereisawelba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("harrahs"));

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
