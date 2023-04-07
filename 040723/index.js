// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name);// Parentdga jo'natish uchun super()dan foydalaniladi/
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit"); 
//   console.log(rabbit.name); 

class Rabbit extends Object {
    constructor(name) {
      super(); // doim parendan meros olyotganda super() chaqirilishi kerak;
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  alert( rabbit.hasOwnProperty('name') ); // true