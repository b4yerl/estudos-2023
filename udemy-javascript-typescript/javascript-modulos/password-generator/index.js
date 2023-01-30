import promptSync from "prompt-sync";
import { Generator } from "./Generator.js";
import * as colors from 'colors'

const prompt = promptSync();

let size; 

do {
  size = Number(prompt('What\'s the password size? (4-20): '));
} while(size < 4 || size > 20 || isNaN(size))

const option = { size }

option.upper = prompt('Do you want upper case characters? (left blank for no): ');
option.lower = prompt('Do you want lower case characters? (left blank for no): ');
option.numbers = prompt('Do you want numbers? (left blank for no): ');
option.special = prompt('Do you want special characters? (left blank for no): ');

const gen = new Generator(option);
const password = gen.generatePassword();
console.log(`
---YOUR PASSWORD---
`.yellow)
console.log(password.red.bold)