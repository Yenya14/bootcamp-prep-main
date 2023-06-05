// YOUR CODE BELOW
function myMnemonic(word1, word2, word3, word4) {
    let mnemonic = '';
    
    if (word1 !== undefined) {
     mnemonic += word1[0];}
    if (word2 !== undefined) {
     mnemonic += word2[0];}
    if (word3 !== undefined) {
     mnemonic += word3[0];}
    if (word4 !== undefined) {
     mnemonic += word4[0];}
    
    return mnemonic;
  }

  
// function myMnemonic(word1, word2, word3, word4) {
//     let mnemonic = '';
    
//     for (let i = 0; i < arguments.length; i++) {
//       let word = arguments[i];
//       if (word !== undefined) {
//         mnemonic += word.charAt(0);
//       }
//     }
    
//     return mnemonic;
//   }
