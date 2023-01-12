// Exercício 1
function getBiggestOf (x, y) {
  return x > y ? x : y;
}

console.log(getBiggestOf(5, 69))

// Exercício 2
const isLandscape = (w, h) => w > h;

console.log(isLandscape(1920, 1080))

// Exercício 3
const fizzBuzz = function(n) {
  if(typeof n !== 'number') return n;
  if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if(n % 3 === 0) return 'Fizz';
  if(n % 5 === 0) return 'Buzz';
  return n;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i))
}