import React from "react";

let strArr = ['1','4','13']
let challengeToken = 'yx7ri63ua1'
let result = []

console.log("challengeToken=",challengeToken.split(""));
console.log("strArr[2]=",strArr[2]);
console.log("strArr[2].length=",strArr[2].length);

for (let i=0; i<strArr.length; i++) {
    if (strArr[i].length>1){
        console.log(`strArr[${i}]=`,strArr[i]);
        //console.log(`strArr[${i}].length=`, strArr[i].length);
        let tmpStrArr = strArr[i].split("")
        let tmpElem =""
        console.log(`tmpStrArr=`,tmpStrArr);
        for (let k in tmpStrArr){
            if (challengeToken.includes(tmpStrArr[k]))
                tmpElem +=`--${tmpStrArr[k]}--`
        }
        console.log(`tmpElem=`,tmpElem)
        strArr[i]=tmpElem
    }
    else {
        if (challengeToken.includes(strArr[i]))
            strArr[i] =`--${strArr[i]}--`
        }
    console.log("strArr=",strArr);
}


let Test = (props) => {
    return ( <div>
            test {result}
    </div>
    )
}
export default Test