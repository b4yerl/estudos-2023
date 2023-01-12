const fs = require("fs").promises;
const prompt = require("prompt-sync")({ sigint: true });

async function main() {
  const pathToFile = '/data/';
  const read = await fs.readdir(__dirname + pathToFile)
  const rolesData = await readRolesFile(read)
  console.log(getUserInputAndReturnData(rolesData))
}

async function readRolesFile(arr) {
  for(let file of arr) {
    if(file === 'roles.json') {
      const raw = await fs.readFile(__dirname + '/data/' + file)
      return JSON.parse(raw)
    }
  }
}

function getUserInputAndReturnData(obj) {
  let code = prompt("Type the role code to get the data: ")
  do {
    for(let role of obj) {
      if(code == role.code) {
        return JSON.stringify(role);
      }
      else {
        code = prompt("Please provide a valid code: ")
      }
    }
    
  } while (true);
}

main()