function romanToInt(roman) {
    // Create a map of Roman numerals to integers
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = 0;
  
    // Loop through the input string
    for (let i = 0; i < roman.length; i++) {
      // Get the current Roman numeral and the one after it (if it exists)
      const current = roman[i];
      const next = roman[i + 1];
  
      // If the current numeral is mapped to a value that is less than the one after it,
      // it is being used as a subtractive notation. In this case, we should subtract the
      // value of the current numeral from the value of the next numeral instead of adding it.
      if (map[current] < map[next]) {
        result += map[next] - map[current];
        i++;
      } else {
        // Otherwise, just add the value of the current numeral to the result
        result += map[current];
      }
    }
  
    return result;
  }
  
  // Example usage
  console.log(romanToInt('MCMXCIV')); // 1994
  