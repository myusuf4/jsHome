// Ex 10 ---
// Problem - 4 [1, 2, 3, 2] => [1, 2, 1] => [1, 1] => [0]
// Solution
// let arr=[1,2,5,4,9]
//     while (arr.length > 1) {
//     arr=  arr.sort((a, b) => a - b);
//     let s = arr[arr.length - 1] - arr[arr.length - 2];
//     arr.splice(arr.length - 2, 2);
//     s ? arr.push(s) : null;
//     console.log(arr);
// }

// Ex 11 ---  https://t.me/webbrain_academy/53
// function findMax(number) {
//   let binary =number.toString(2);
//   console.log(binary);
//   let oneCounts = [];
//   let wasOne = false;
//   let sum = 0;
//   for (let char of binary) {
//     if (char === "1") {
//       wasOne = true;
//       if (sum !== 0) oneCounts.push(sum);
//       sum = 0;
//     }
//     if (char === "0" && wasOne) sum++;
//   }
//   console.log(oneCounts);
//   return oneCounts.length === 0 ? 0 : Math.max(...oneCounts);
// }
// console.log(findMax(529));



//ex12 https://t.me/webbrain_academy/60
// let arr=[2,4,5,7,7];

// const getMiddleArf=(arr,n)=>{
//     let res=0;
//     while(arr.length){
//         arr.reduce((sum,cur,index)=>{
//             let middleArf=sum+cur / (index + 1);
//             if(middleArf==n){
//                 res++;
//             }
//             return sum+cur;
//         },0)
//         arr.shift()
//     }
//     return res;

// }
// console.log(getMiddleArf(arr,4));

////ex1
// let str = "webbbraiiin accaddemmy";
// const removeDuplicate = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) res += str[i];
//   }
//   return res;
// };
// console.log(removeDuplicate(str));

//ex2
// let str = "kiyik";
// let res = str.split("").reverse("").join("") === str;
// console.log(res);

// Ex 3 ---
// let str = "Webbrain Academy";
// const calcChars = (str) => {
//   let minChars = 0;
//   let bigChars = 0;
//   for (let i of str) {
//     if (i !== " ") {
//       if (i === i.toLowerCase()) ++minChars;
//       else ++bigChars;
//     }
//   }
//   return `Big chars: ${bigChars}, Min chars: ${minChars}`;
// };
// console.log(calcChars(str));

//ex4


// let str = "WebBr@in Ac@demy";
// const changeFunc = (str) => {
//   let res = "";
//   for (let i of str) {
//     if (i !== "@") res += i;
//     else res += "a";
//   }
//   return res;
// };
// console.log(changeFunc(str));


// // Ex 5 
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// const returnBooleans = (obj) => {
//   let res = {};
//   for (key in obj) {
//     if (obj[key] === true || obj[key] === false) res[key] = obj[key];
//   }
//   return res;
// }
// console.log(returnBooleans(obj));



// Ex 6 
// let str = "We66ra1n Acad4my";
// const findNumbers = (str) => {
//   let res = [];
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") res.push(Number(char));
//   }
//   return res.join("");
// }
// console.log(findNumbers(str));



//ex7
// const makeDouble = (str) => {
//   let res = "";
//   for (let char of str) {
//     res += char.repeat(2);
//   }
//   return res;
// };
// console.log(makeDouble("Muhammad"));

// ex8
// let str = "webbraaiiin";
// const toZip = (str) => {
//   let res = "";
//   let count = 1;
//   for (let char of str) {
//     if (res.length === 0) res += char;
//     else if (char === res[res.length - 1]) count++;
//     else {
//       if (count > 1) {
//         res += count;
//         count = 1;
//         res += char;
//       } else res += char;
//     }
//   }
//   return res;
// };
// console.log(toZip(str));


//ex9
// let obj = { title: "Webbrain", age: 2 };
// console.log(Object.keys(obj));

//ex10
// function getCharCount(str) {
//     let charCount = {};
    
//     for (var i = 0; i < str.length; i++) {
//       let char = str.toLowerCase().at(i);
//       charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//     }
    
//     return charCount;
//   }
  
   
//   console.log(getCharCount("webbrain")); 

//ex
// let user = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// let sum = 0;
// while(user){
//     sum+=user.age;
//     user = user.child
// }

// console.log(sum);


//ex
// let str="web";
// let str1="ebw";

// let changeStr=str.split("").sort((a,b)=>a.localeCompare(b)).join()
// let changeStr1=str1.split("").sort((a,b)=>a.localeCompare(b)).join()
// console.log(changeStr===changeStr1);


//ex
// ar=[1,2,4];
// ar1=[1,2,4];

// console.log(ar.join("")==ar1.join(""));


// let ar=[1,4,5,7,787,66,54,5];

// for(v of ar){
//     if(`${v}`.length > 1){
//         console.log(v);
//     }
// }
