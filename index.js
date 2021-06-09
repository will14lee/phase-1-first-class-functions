
const dog=(function (){
    console.log("I'm Mary")
});
function receivesAFunction(spy) {
    spy();
  } 
receivesAFunction(dog);

function returnsANamedFunction(n) {
      console.log(n)
      if (n <= 1) {
        return 1;
      }
      return n * returnsAnAnonymousFunction(n - 1);
    };
function returnsAnAnonymousFunction(){
    var fn;
    return (()=>console.log("Y"));
}  

//fn= returnsAnAnonymousFunction()
done();