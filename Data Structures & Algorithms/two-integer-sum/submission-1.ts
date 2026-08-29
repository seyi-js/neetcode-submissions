class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i of nums){
            for(let j =0; j < nums.length; j++ ){
                

                const isIndexEqual = nums.indexOf(i) === j+1;

                

                if(i + nums[j+1]  === target && !isIndexEqual ){
                    
                    return [nums.indexOf(i), j+1];
                    
                }
            }
        }

        
    }
}
