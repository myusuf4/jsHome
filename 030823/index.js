// let calculator = {
    
//     sum(){
//         return this.a +this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     },
//     read(){
//     this.a = 2;
//     this.b = 3;
// }
//   };
//   calculator.read();
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );


// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log(user.ref);
//   console.log( user.ref.name );//undefined 


// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       console.log( this.step );
//       return this;
//     }
//   };
  
//   ladder.up().up().down().showStep().down().showStep();//1 keyin 0