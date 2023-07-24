let callback = function () {
  return "inner function";
};

function receivesAFunction(callback) {
  // Call the callback function here
  callback();
  return "THIS IS A CALLBACK FUNCTION";
}

// Call receivesAFunction and pass the callback function to it
receivesAFunction(callback);


function returnsANamedFunction() {
  let namedFunction = function innerFunction() {
    return "This is a named function";
  };
  return namedFunction;
}

let myNamedFunction = returnsANamedFunction();


let result = myNamedFunction();
console.log(result);


function returnsAnAnonymousFunction() {
  let anonymousFunction = function() {
    console.log("This is an anonymous function");
  };

 
  return anonymousFunction;
}

let myAnonymousFunction = returnsAnAnonymousFunction();


myAnonymousFunction();


