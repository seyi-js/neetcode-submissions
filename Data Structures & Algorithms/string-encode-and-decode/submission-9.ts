
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        
        const encoddedArray = []
        for (let str of strs){
            
            encoddedArray.push(`${str.length}#${str}`)
        }

        return encoddedArray.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let counter = 0;
        
        const strArray = [];


        while(counter < str.length){
            let currentStr = str[counter];
            let innerCounter = 2;

            if(currentStr == "0"){
                    strArray.push("")
                    counter = parseInt(currentStr) + counter + innerCounter;
                    continue;
                }

            if(parseInt(currentStr)){

                //For double digit numbers like 10, we need to iterate until we find #

                //check if the next string is #
                if(str[counter + 1] != "#"){
                    
                    for (let i = counter + 1; i< str.length; i++){
                        if(str[i] != "#"){
                            currentStr = `${currentStr}${str[i]}`
                            innerCounter +=1
                        }else{
                            break
                        }
                    }

                }

                
                
                strArray.push(str.substr(counter + innerCounter, parseInt(currentStr)))

            counter = parseInt(currentStr) + counter + innerCounter
            continue
            }

            // counter++;
            break;
            // continue;
            
        }
        return strArray;
    }
}
