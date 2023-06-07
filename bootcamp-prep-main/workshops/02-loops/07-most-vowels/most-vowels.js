// YOUR CODE BELOW
function mostVowels(words) {
    const wordArray = words.split(' ');
  
    let maxVowelCount = 0;
    let maxVowelWord = '';
  
    for (const word of wordArray) {
      const vowelCount = (word.match(/[aeiou]/gi) || []).length;
  
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        maxVowelWord = word;
      }
    }
  
    return maxVowelWord;
  }









































