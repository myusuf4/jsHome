//////1/////
// let arr=[1,3,5,6,7,8];

// console.log(eval(arr.join("+")));


//////2////


// let obj={};

// function findChar(arr){
//     let str=arr.join("");
//     for (let i = 0; i < str.length; i++) {
//         let char = str.toLowerCase().at(i);
//         obj[char] = obj[char] ? obj[char] + 1 : 1;
//       }
      
//       return obj;
// }
// console.log(findChar(["webbrain","salom"])); 


///4///

// let ar=[2,3];
// let ar1=[2,3];

// console.log(ar1===ar);


//5////


// let user=[
//     {id:1,year:1998,engine:1,name:"Tico"},
//     {id:2,year:2005,engine:1.2,name:"Matiz"},
//     {id:3,year:2010,engine:1.6,name:"Jentra"},
//     {id:4,year:2010,engine:1.5,name:"Cobalt"},
//     {id:5,year:2012,engine:2,name:"Malibu"},
//     {id:6,year:2000,engine:1.2,name:"Damas"},
//     {id:7,year:2018,engine:2.4,name:"Tracker"},
// ]

// let res=user.filter((v)=>v.year<2000);
// console.log(res);


// let res1=user.filter((v)=>v.year>2000)
// console.log(res1);


// let res2=user.sort((a,b)=>b.engine-a.engine);
// console.log(res2);


// let res3=user.sort((a,b)=>a.year-b.year)

// console.log(res3);


// let res4=user.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(res4);

// let res5=user.filter((v)=>v.year<2000?v.status="eski":v)
// console.log(res5);


// let res6=user.filter((v)=>v.year>=2000&&v.year<=2010?v.status="o'rtacha":v)
// console.log(res6);


// let res6=user.filter((v)=>v.year>2010&&v.year<=2022?v.status="yangi":v)
// console.log(res6);