let romanToInt = s => {

    let map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 500,
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
    
    for (let i = 0; i < s.length; i++) {
      
        let currentNumeral = s[i];
        let nextNumeral = s[i+1];
    
        if (map[currentNumeral] < map[nextNumeral]) {
            result += map[nextNumeral] - map[currentNumeral];
            i++;
        } else {
            result += map[currentNumeral];
        }
    }

    return result;

}

console.log(romanToInt('MCMXCIV'));

