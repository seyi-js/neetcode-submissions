class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap = {};

        for (let num of nums){

            numMap[num] = (numMap[num] || 0) + 1;
        }

        const entries = Object.entries(numMap);

        

        entries.sort((a,b) => Number(b[1]) - Number(a[1]));
        

        return entries.slice(0,k).map(([num])=> Number(num))
    }
}
