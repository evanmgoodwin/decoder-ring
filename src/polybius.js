// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {


    // Initializing variables

    let newInput = input.toLowerCase();
    let code = "";

    let encodeSquare = {
      "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
      "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52,
      "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
      "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
      "v": 15, "w": 25, "x": 35, "y": 45, "z": 55
    };
  
    let decodeSquare = {
      "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
      "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
      "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
      "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
      "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
    };

    // Determine whether input values are valid

    let checkInput = input.replace(" ", "").length % 2;
    if(encode === false && checkInput == 1) {
      return false
    };

    // Nested for loops for encoding messages

    if (encode === true) {
      for(let i = 0; i < newInput.length; i++) {
        let values = newInput[i];
         for(let char in encodeSquare) {
          if(values === char) {
            code += encodeSquare[char];
          }
         }
          if(values === " ") {
            code += values;
          }
      }
      return code;
    }

    // Code block for decoding messages

    if (encode === false) {
      let decodedResult = [];
      let stringInput = input.split("");
      let decodeNumResult = "";

      for(let decodeNum of stringInput) {
        if(decodeNum === " ") {
          decodedResult.push(decodeNum);
        }
          if(decodeNumResult.length < 2 && decodeNum !== " ") {
            decodeNumResult += decodeNum;
          }
          if(decodeNumResult.length === 2) {
            decodedResult.push(decodeSquare[decodeNumResult]);
            decodeNumResult = "";
          }
      }

      return decodedResult.join("");
    }
  }

  return {
    polybius,
  };
})();

// Export module

module.exports = { polybius: polybiusModule.polybius };