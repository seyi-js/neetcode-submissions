class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
         const strMap = new Map();

         for (let str of strs){
            const sortedStr = str.split('').sort().join('');

            if(strMap.has(sortedStr)){
                const currentValues = strMap.get(sortedStr)
                strMap.set(
                    sortedStr, 
                    [...currentValues,str ]
                )
            }else{
                strMap.set(sortedStr, [str])
            }
         }

         return [...strMap.values()]
    }

   

    
}
