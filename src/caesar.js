// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    
    // Determine whether input values are valid

    if(shift > 25 || shift < -25 || !shift || shift === 0) {
      return false;
    };
    
    // Initializing variables
    
    let newInput = input.toLowerCase();
    let code = "";

    // Nested for loops for encoding messages

    if (encode === true) {
      for (let i = 0; i < newInput.length; i++) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let letter = newInput[i];

        for(let j = 0; j < alphabet.length; j++) {
          if(letter === alphabet[j]) {
            if (j + shift >= 0 && j + shift <= 25) {
              code += alphabet[j + shift];
            }
            if(j + shift < 0) {
              code += alphabet[j + shift + 26];
            }
            if(j + shift > 25) {
              code += alphabet[j + shift - 26];
          }
        }
      }
      
      if (letter === " " || letter === "!" || letter === ".") {
        code += letter;
      }
    }
    return code;
  }

  // Nested for loops for decoding messages

  if (encode === false) {
    for(let i = 0; i < newInput.length; i++) {
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      let letter = newInput[i];
      for(let j = 0; j < alphabet.length; j++) {
        if (letter === alphabet[j]) {
          if(j - shift >= 0 && j - shift <= 25) {
            code += alphabet[j - shift];
          }
          if(j - shift < 0) {
            code += alphabet[j - shift + 26];
          }
          if(j - shift > 25) {
            code += alphabet[j - shift - 26];
          }
        }
      }

      if (letter === " " || letter === "!" || letter === ".") {
        code += letter;
      }
    }

    return code;
  }
}

  return {
    caesar,
  };
})();

// Export module

module.exports = { caesar: caesarModule.caesar };