class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = new Set()

        for(let index=0; index <=nums.length; index++ ){
            
            if(seen.has(nums[index])){
                seen.clear()
                return true
            }
            seen.add(nums[index])

           
        }
        seen.clear()
        return false;
    }
}
