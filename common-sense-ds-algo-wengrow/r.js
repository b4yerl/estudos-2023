function uniquePaths(rows, columns, memo = new Map()) {
  if(rows == 1 || columns == 1) return 1;

  if(!memo.get(String(rows) + String(columns))) {
    memo.set(String(rows) + String(columns), uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo));
  }
  
  return memo.get(String(rows) + String(columns));
}

console.log(uniquePaths(7,3))