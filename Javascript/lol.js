let globalVar = "Global";

function outerFunction() {
  let outerVar = "Outer";

  function innerFunction() {
    let innerVar = "Inner";
    
  }

  console.log(globalVar, outerVar, innerVar); // What will be printed here?
  innerFunction();
}

outerFunction();
