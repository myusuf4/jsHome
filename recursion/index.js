// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
  
//   console.log( factorial(6) ); 


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
  
//   console.log( fib(7) ); // 13
//   console.log( fib(3) ); // 2


// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }

//   console.log(fib(7));

// function fib(n, res = [1, 1]) {
//     if (n === 0 || n === 1) return 1;
//     if (n === res.length) return res[res.length - 1];
//     res.push(res[res.length - 1] + res[res.length - 2]);
//     return fib(n, res);
//   }
  
//   console.log(fib(3)); // 2
//   console.log(fib(7)); // 13
//   console.log(fib(77)); // 5527939700884757



// function sum(a) {
//     return (b) => (b ? sum(a + b) : a);
//   }
  
//   console.log(sum(-1)(2)(3)(4)(5)());


let str="Webbrain"

for(e of str){
    console.log(e);
}
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.at(0));
console.log(str[str.length-1]);
