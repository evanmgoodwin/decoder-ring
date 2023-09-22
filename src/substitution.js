// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    
    // Determine if input values are valid

    if(!alphabet || alphabet.length !== 26) {
      return false;
    }

    // Initializing variables

    let newInput = input.toLowerCase();
    let abcs = "abcdefghijklmnopqrstuvwxyz";
    let code = "";

    for(let i = 0; i < alphabet.length; i++) {
      let total = 0;
      for(let j = 0; j <alphabet.length; j++) {
        if(alphabet[i] === alphabet[j]) {
          total += 1;
        }
      }
      if(total >= 2) {
        return false;
      }
    }

    // Encoding code

    if(encode === true) {
      for(let i = 0; i < newInput.length; i++) {
        let inputIndex = newInput[i];
        for(let j = 0; j < abcs.length; j++) {
          if(inputIndex === abcs[j]) {
            code += alphabet[j];
          }
        }
        if(inputIndex === " ") {
          code += inputIndex;
        }
      }
      return code;
    }

    // Decoding code

    if(encode === false) {
      for(let i = 0; i < newInput.length; i++) {
        let inputIndex = newInput[i];
        for(let j = 0; j < alphabet.length; j++) {
          if(inputIndex === alphabet[j]) {
            code += abcs[j]
          }
        }
        if(inputIndex === " ") {
          code += inputIndex;
        }
      }
      return code;
    }

  }

  return {
    substitution,
  };
})();

// Export module

module.exports = { substitution: substitutionModule.substitution };