class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numberMap = new Map();

        for(let i =0; i < nums.length; i++){
            const count = target - nums[i];

            if(numberMap.has(count)){
                return [numberMap.get(count), i]
            }

            numberMap.set(nums[i], i)
        }

        

return [];
        
    }
}
