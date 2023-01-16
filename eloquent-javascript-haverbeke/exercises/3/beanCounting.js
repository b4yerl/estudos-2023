function counChar(str, char) {
  let counter = 0;
  for(let letter of str) {
    if(letter === char) {
      counter++;
    }
  }
  return counter;
}
