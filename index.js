const digits = [9,]

var plusOne = function(digits) {

    let arrLength = digits.length;
    digits[arrLength-1]++;

    if (arrLength = 1 && digits[0] === 10) {
        digits[0] = 1;
        digits.push(0);
        return digits;
    } else {
        console.log(digits.length)
        for (let i = digits.length - 1; i >= 0; i--) {

            if (digits[i] === 10) {
                digits[i] = 0;
                digits[i-1]++;
                if (digits[0] === 10) {
                    digits[0] = 1;
                    digits.push(0);
                    return digits;
                }
            } else {
                return digits;
            }
        }
    }
    
    
};

console.log(plusOne(digits));