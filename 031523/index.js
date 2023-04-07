/////////1/////////
// function check() {
//     let str="Webbrain";
//     let str1="webbrain";
// let result=str.toLowerCase().localeCompare(str1.toLowerCase())
// if(result == 0){
//     console.log("to'gri");
// }
// else if( result === 1){
//     console.log("qisman to'gri");
// }
// else{
//     console.log("ichida bunday so'z qatnashmagan");
// }
// }
// check();

///////// 2 ///////////
// function truncate(str, n) {
//     return (str.length > n) ?
//       str.slice(0, n - 1) : str;
//   }

//   console.log(truncate("webbrain",5));


////// 3///////


// function getCurrancy(num) {
//     return +num.slice(1)
// }

// console.log(getCurrancy("$120"));

//////2//////////
// function getCharCount(str) {
//     let charCount = {};
    
//     for (var i = 0; i < str.length; i++) {
//       let char = str.toLowerCase().at(i);
//       charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//     }
    
//     return charCount;
//   }
  
   
//   console.log(getCharCount("webbrain")); 
  

//////////////5////////////////
    // function count(sting) {
    //     let stringCount = 0;
    //     let numCount = 0;
    //     let charCount = 0;
    //     let obj = {};
      
    //     for (let i=0; i<sting.length; i++) {
    //       let char = sting.charAt(i);
      
          
    //     if (!isNaN(char)) {
    //         numCount++;
    //       }
    //      else if (char==="~"||"!"||"@"||"#"||"$"||"%"||'^'||'&'||"*") {
    //         charCount++;
    //      }
    //   if(isNaN(char)){
    //     stringCount++;
    //   }
       
    //     }
      
    //     obj.string = stringCount;
    //     obj.num = numCount;
    //     obj.char = charCount;
      
    //     return obj;
    //   }
      
    //   console.log(count("W3@S21#$")); // returns {"string": 2, "num": 1, "char": 18}


    function UpperCase(str) {
        let result = str.split('.');
        
        for (let i = 0; i < result.length; i++) {
          result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        }
        
        return result.join('.');
      }
      

      
console.log(UpperCase("webbrain academy"));      

let arr= new Array(3)
console.log(arr);