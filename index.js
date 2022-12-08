//receive one argument, a string. 
//Your function should return true if the string is a palindrome 
//(that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
//and return false if it is not a palindrome.

function isPalindrome(word) {
  // Write your algorithm here
  //Reverse the string and save it in a variable
  let reverseString = word.split(" ").reverse().join("");
    
   //Creating a logic to check if reverseString is equal to word
   //returns true if equal
   //returns false if not equal
   if(reverseString === word){
    return true
   }else if(reverseString != word){
    return false
   }
}

/* 
  Add your pseudocode here
  isPalindrome takes a "string"
  reverses the string
  Saves in a new variable
      if (reversed string is (===) to word)
        return true
      else(reverved string != to word ) 
        return false
*/

/*
  Add written explanation of your solution here
  isPalindrome receives a string which is a word
  It splits the string into an array of substring
  It reverses an array in place and returns the reference to the same array, 
  the first array element now becoming the last, 
  and the last array element becoming the first. 
  It then joins the reversed string to a initial string
  I store the reversed String in a variable called reverseString
  I then check if reversedString is strictly equal to received word 
  If they are equal isPalindrome returns true and false if they are not equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

module.exports = isPalindrome;
