
// const dog=(function (){
//     console.log("I'm Mary")
// });

// const dog=(function (){
//   console.log("I'm Mary")
// });
// function receivesAFunction(spy) {
//     spy();
//   } 
// receivesAFunction(dog);


var returnsANamedFunction= function fn() {};
returnsANamedFunction.name;
// var fn2=fn.name


// function returnsANamedFunction(n=2) {
//       console.log(n)
//       if (n <= 1) {
//         return 1;
//       }
//       return n * returnsANamedFunction(n);
//     };
function returnsAnAnonymousFunction(){
    return (()=>console.log("Y"));
}  

//fn= returnsAnAnonymousFunction()
// done();