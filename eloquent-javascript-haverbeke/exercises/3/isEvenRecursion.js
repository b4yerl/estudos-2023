const isEven = n => {
  if(n === 0) {
    return true;
  }
  else if(n === 1) {
    return false;
  }
  return isEven(n - 2);
};
