// let user={};
// user.name="John";
// user.surname="Smith";
// user.name="Pete";
// delete user.name;
// console.log(user);

// let schedule={};

// schedule.name="Muhammad"

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
//   console.log(isEmpty(schedule));


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   console.log(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
//   multiplyNumeric(menu);
//   console.log(menu);

// let obj={
//     id:1,
//     name:"WebBrain"
// }

// for(i in obj){
//     console.log(i);
// }

// let obj={
//     id:1,
//     name:"WebBrain"
// }

// for ( i in obj){
//     if(typeof obj[i] === "number"){
//         console.log(i);
//     }
// }


// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for(i in obj){
//     if(typeof obj[i]==="boolean"){
//         console.log(`${i}:${obj[i]}`);
//     }
// }

// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }


// function Search(obj){
//     for(i in obj){
//         if(typeof obj[i]=="string"){
//             console.log(`${i}:${obj[i]}`);
//         }
//     }
// }
// Search(obj)


// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }

// function Search(obj){
//     for(i in obj){
//         if(typeof obj[i]=="string"){
//             console.log(`${i}:${obj[i]}`);
//         }
//     }
// }
// Search(obj)

let user = {
    id: 1,
    name: 'Odil',
    age:78,
    child: {
        id: 1,
        name: 'Ali',
        age:48,
        child: {
            id: 1,
            name: 'Umar',
            age:20
        }
    }
}
let sum = 0;
while(user){
    sum+=user.age;
    user = user.child
}

console.log(sum);