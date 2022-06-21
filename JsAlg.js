const vowels = ["a", "e", "i", "o", "u"]
let sentence = "this is a sentence."
let length = sentence.length 
let space = (sentence.split(" ").length - 1);
function WordCount(str) { 
  return str.split(" ").length;
}
function countVowel(sentence) { 
    let count = 0;
    for (let letter of sentence) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count    
}
const vowel = countVowel(sentence);

console.log( length - space);
console.log(WordCount(sentence));
console.log(vowel);

