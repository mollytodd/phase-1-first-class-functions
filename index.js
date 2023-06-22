function receivesAFunction(callback) 
{
    callback();
}

function returnsANamedFunction() {
    const namedFunction = function functionName() {
     
    };
    return namedFunction;
  }


  function returnsAnAnonymousFunction() {
    return function() {
   
    };
  }