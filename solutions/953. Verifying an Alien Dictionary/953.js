/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {    
  for (let wordsIndex = 0;wordsIndex < words.length;wordsIndex++) {
      const firstWord = words[wordsIndex]
      const secondWord = words[wordsIndex + 1]
      
      for(let lettersIndex = 0;lettersIndex < 20;lettersIndex++) {
          if (firstWord && secondWord && (firstWord[lettersIndex] !== secondWord[lettersIndex])) {
              if (order.indexOf(firstWord[lettersIndex]) > order.indexOf(secondWord[lettersIndex])) {
                  return false
              } else {
                  break;
              }
          }
      }
  }
  
  return true
};