# Longest Word

## JavaScript Challenge

### For this challenge you will be determining the largest word in a string

#### Challenge Description

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

### Alternative one liner solution for same challenge could be as follow

In app.js file, replace the code with;

function LongestWord(sen) {
  return sen.match(/[A-z]+/g).sort(function(a,b){return b.length-a.length})[0];
}
