class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.binarySearch(0, nums.length - 1,nums, target)
    }

    binarySearch(left:number, right:number, nums:number[], target:number){
        if(left > right){
            return -1;
        }

        let middle = left + Math.floor((right - left) / 2)
        console.log(middle)

        if(nums[middle] === target){
            return middle;
        }

        // console.log(left, right, middle, nums[middle])

        if(nums[middle] < target){
            return this.binarySearch(middle + 1, right,nums, target)
        }else{
            return this.binarySearch(left,middle - 1,nums, target)
        }
    }
}
