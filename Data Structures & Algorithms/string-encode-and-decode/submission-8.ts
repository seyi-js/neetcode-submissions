
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

        console.log(str)

        while(counter < str.length){
            let currentStr = str[counter];
            let previousStr = str[counter];
            let innerCounter = 2;

            if(currentStr == "0"){
                    strArray.push("")
                    counter = parseInt(currentStr) + counter + 2
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

                    console.log(currentStr, innerCounter)
                }else{
                    innerCounter = 2
                }

                
                
                strArray.push(str.substr(counter + innerCounter, parseInt(currentStr)))

            // console.log(counter)
            counter = parseInt(currentStr) + counter + innerCounter
            // console.log(counter, currentStr)
            continue
            }

            // counter++;
            break;
            // continue;
            
        }

        // for (let i=counter; i < str.length; i += counter ){
        //     // console.log(counter)
        //     if(Number(str[i])){


               
        //         console.log(str, i + 2)
        //         let theWord = str.substr(i+2, Number(str[i]))
        //         strArray.push(theWord)
        //         counter = i + 2 + Number(str[i])
        //         console.log(counter, i)
        //         console.log(theWord)
                
        //     //    console.log(counter)
        //     }else if (str[i] == "0"){
        //         // console.log(i)
        //             strArray.push("")
        //             // console.log("hey ")
        //             counter += (i || 1)
        //         }
        // }

        // while 

        return strArray;
    }
}
