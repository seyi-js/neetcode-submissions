class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const length = nums.length;
    const products = new Array(length).fill(1);

    // Pass 1: Calculate left products
    for (let i = 1; i < length; i++) {
        products[i] = products[i - 1] * nums[i - 1];
    }

    // Pass 2: Calculate right products and multiply on the fly
    let right = nums[length - 1];
    for (let i = length - 2; i >= 0; i--) {
        products[i] *= right;
        right *= nums[i];
    }

    return products;
        // let numMap = [];
        // console.log(nums.length)

        // nums.map((num,i)=> {
        //     const theNums = [...nums];
        //     const currentNum = num;
        //     theNums.splice(i,1);
            

        //     numMap.push(theNums.reduce((acc, value)=> acc * value, 1))
        // })

        // for(let i= 0; i< nums.length; i++){
        //     const theNums = [...nums];
        //     const currentNum = nums[i];
        //     theNums.splice(i,1);
            

        //     numMap.push(theNums.reduce((acc, value)=> acc * value, 1))

        // }


        // return numMap;
    }
}
