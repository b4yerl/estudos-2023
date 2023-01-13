// Esse scipt é só um teste para treinar o uso do fs

import { writeFile } from "fs";
import { readdir } from "fs/promises"
import { dirname, extname, join } from "path";
import { fileURLToPath } from "url";


async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let exeFiles = findExe(__dirname);
  const fileContent = `${(await exeFiles).join(' <br> ')}`
  
  writeFile(join(__dirname, "exefiles.html"), fileContent, (err, file) => {
    if(err) {
      console.log(err)
      console.log('Error during file creation')
    }
    else {
      console.log('SUCCESS')
    }
  })
}

async function findExe(folderName) {
  let exeFiles = []
  async function findFiles(folderName) {
    const items = await readdir(folderName, { withFileTypes: true });

    for (let item of items) {
      if(item.isDirectory()) {
        return findFiles(join(folderName, item.name));
      }
      else {
        if(extname(item.name) === '.exe') {
          exeFiles.push(item.name);
        }
      }
    }
  }
  await findFiles(folderName);
  return exeFiles;
}

main();