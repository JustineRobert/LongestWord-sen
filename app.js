function LongestWord(sen) {
  sen = sen.split(" ");
  let longest = sen[0];
 
  for (let i = 0; i < sen.length; i++) {
    if (i == sen.length - 1) {
      return longest;
    } else if (sen[i].length >= sen[i + 1].length) {
      longest = sen[i];
    } else {
        longest = sen[i + 1];
    }
  }
}