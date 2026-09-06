class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);
        let streak =0;

        if (!nums.length){
            return 0;
        }


        for (let num of Array.from(numSet)){
            
            if(!numSet.has(num-1)){
                //this is the start of a sequence/streak
                let length = 1;

                while(numSet.has(num + length)){
                    length++;
                }

                if(length > streak){
                    streak = length;
                }

                
            }


        }

       


        return streak;
    }
}
