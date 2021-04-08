function palindrome(str) {
  const myRegex = /[a-zA-Z0-9]/g;
  let cleanArray = str.match(myRegex);
  console.log(cleanArray);

  if (cleanArray.join('').toLowerCase() == cleanArray.reverse().join('').toLowerCase()) {
    return true;
    } else {
     return false;
    }
  return true;
}
