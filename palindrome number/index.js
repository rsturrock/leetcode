var isPalindrome = function(x) {
 
x = x.toString();

function reverseString(str) {
  // Step 1: Convert the string to an array of characters
  var strArray = str.split('');
  
  // Step 2: Reverse the order of the characters in the array
  strArray.reverse();

  // Step 3: Join the characters back into a string
  var reversedString = strArray.join('');

  return reversedString;
}

y = reverseString(x);

for (let i = 0; i < x.length; i++) {
    if ( x[i] != y[i]) {
        return false;
    }
}

return true;

}

isPalindrome(1000021)