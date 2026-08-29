class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numbers = [...nums]

        for(let index=0; index <=nums.length; index++ ){
            
            numbers.splice(0,1)
           
            if(numbers.includes(nums[index])){
               numbers =[];
                return true
            }

           
        }
        numbers =[];
        return false;
    }
}
