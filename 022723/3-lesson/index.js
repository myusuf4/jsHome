// 1 //
// if("0"){
//     console.log("hello");
// }// Natija:hello chunki "0"=>true

// 2 //

// let user="EcmaScrit";

// if(user=="EcmaScript"){
//     console.log("You are Right!");
// }
// else{
//     console.log("Don't you know?");
//     console.log("EcmaScript!");
// }

// 3 //

// let num = 0;

// if(num >= 1){
//     console.log("1");
// }
// else if(num === 0){
//     console.log("0");
// }
// else{
//     console.log("-1");
// }

// 4 // 

// let num =-2;

// num >=1 ? console.log("1") : num === 0 ? console.log("0") : console.log("-1");


// 5 //

// let a = 1;
// let b=3;

// a + b < 4 ? console.log("Below") : a+b==4 ? console.log("Equal") : "Over"


// 6
// let login="Employee"

// login=="Employee"? console.log("Hello") : login == "Director"? console.log("Greetings"):console.log("not found");

// let browser= "Edge"

// switch(browser){
//     case "Edge" : console.log("You've got the edge");
//     break;
//     case "Chrome":
//     case "Safari":
//     case "Opera" : 
//     console.log("We support this browser too"); 
//     break;
//     default:console.log("it seems good, but we don't know about your browser");
// }

// let i = 3;
// while(i){
//     console.log(i--);
// }

// let i=0;

// while(i<5){
//     i++
//     console.log(i);
// }

// for (let i=0; i <3 ; i++){
//     console.log(`number ${i}`);
// }

let num =100;

for(let i = 1;i < num; i++){
    tub=true;
    for(let j = 2; j < i; j++){
        if(i%j==0){
            tub=false;
            break;
        }
    }
    if(tub==true){
        console.log(`${i} => tub son`);
    }
}


