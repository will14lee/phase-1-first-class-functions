// const dog=(function (){
//     console.log("I'm Mary")
// });

// const dog=(function (){
//   console.log("I'm Mary")
// // });
function receivesAFunction(spy) {
    spy();
  } 
// receivesAFunction(dog);

function returnsANamedFunction() {
  return function hello(){console.log("Hi!")
}
}
console.log(returnsANamedFunction());
function returnsAnAnonymousFunction(){
    return (()=>console.log("Y"));
}  
