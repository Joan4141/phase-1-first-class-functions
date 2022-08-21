function receivesAFunction(cb) {
    cb();
  }
  function returnsANamedFunction () {
    return function namedFunction () {
        console.log ("named function")
    }
  }
  function returnsAnAnonymousFunction () {
    return function () {
        console.log ("")  
    }
        
    
  }