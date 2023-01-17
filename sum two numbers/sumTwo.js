/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let indicesSolution = [];
        nums.forEach(e => {
            for (let i = nums.indexOf(e) + 1; i < nums.length; i++) {
                if(nums[i] + e === target && indicesSolution.length < 2) {
                    indicesSolution.push(nums.indexOf(e),i);
                    
                }   
            }
        }) 
        return indicesSolution;

    
};

console.log(twoSum([3,2,4,3,5,1,2],))