const prompt = require("prompt-sync")({ sigint: true });

function main() {
  const numberOfNames = prompt("How many names do you want to sort: ");
  const sortedNames = sortNames(numberOfNames);

  for(let i in sortedNames) {
    console.log(`${Number(i) + 1}: ${sortedNames[i]}`);
  }
}

function sortNames(n) {
  const nameList = getNames(n);
  const sortedList = nameList.sort();
  return sortedList;
}

function getNames(n) {
  let arr = []
  for(let i = 0; i < n; i++) {
    const name = prompt(`Please insert the #${i + 1} name: `);
    arr.push(name);
  }
  return arr;
}

main()