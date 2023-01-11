# Work with files and directories in a Node.js app

### Work with the file system

O Node já entrega um módulo para trabalharmos com o file system, o "fs module". Como o fs module está incluído por padrão no Noede, nós não precisamos incluí-lo com o npm install.

O fs module tem um namespace "promises" com versões assíncronas de todos os métoodos e é ele que usaremos. Sendo assim, para incluir o fs module, basta importa-lo normalmente no arquivo:
> const fs = require("fs").promises // ou pode tentar
> import { promises as fs } from "fs";
> import * as fs from "fs";

Uma das tarefas mais banais quando trabalhamos com file system é a listagem de um diretório (ls). Assim como a maioria das operações versões síncronas (readdirsync) e assíncronas (readdir), logo podemos realizar a listagem que retorna um array em ordem alfabética com:
> const items = await fs.readdir('diretório');

O resultado do readdir volta tanto com pastas quanto arquivos, para termos essa diferenciação de tipos basta incluirmos uma opção { withFileTypes: true }. Essa opção transforma nosso array em um array de objetos que contém os métodos isFile() e isDirectory(), dessa forma podemos agora obeter a diferença:
> const items = await fs.readdir('diretório', { withFileTypes: true });

Muitas vezes temos pastas e subpastas, até a última camada, para navegar em busca de um arquivo específico poderíamos criar uma função recursiva com o auxílio do isFile() ou isDirectory().

### Work with file paths in Node.js

Muitas vezes não sabemos o path do diretório atual, para isso o Node já nos fornece uma constante, o "__dirname"

Outro módulo já incluso no Node é o "path", que assim como o "fs module" nã precisamos usar o npm, basta importar normal.

Com o path podemos usar métodos como:
> path.join('diretório', 'sub') // 'diretório/sub'
> path.extname('file.json') // '.json'

Enfim, temos diversos métodos para extrair infomações e paths, mas podemos catar a maioria das informações que vamos precisar apenas com o "path.parse()", isso porque esse método retorna um objeto:
> { root, dir, base, ext, name }

### Create files and directories

Podemos também usar o fs module para criar, deletar, copiar, mover, manipular arquivos e diretórios em geral.

Para criar um diretório temos o "fs.mkdir()", mas note que apenas o último diretório será criado, a não ser que usemos a flag { recursive: true }. Outro problema que retorna erro é caso o diretório já exista, podemos contornar e tratar isso empacotando o fs.mkdir com um bloco try...catch

Já para criar arquivos usamos "fs.writeFile()". Esse método recebe o path, o nome do arquivo e seu conteúdo em string. Caso o arquivo já exista, seu conteúdo será sobrescrito. Para passar um arquivo vazio basta usar a função "String()" como terceiro argumento.

### Read and write to files

Para ler o conteúdo de um arquivo com o fs module usamos o método "fs.readFile()", esse método retorna um Buffer object. Ele contém o conteúdo do arquivo, mas em binário. Podemos invocar o "String()" para converter esse Buffer para string.

Apesar de tornar possível a leitura do arquivo, muitas vezes iremos querer usar esse valor para realizar alguma tarefa. Uma forma de fazer isso com arquivos json é usando o "JSON.parse()":
> const fileContent = await fs.readFile(path);
> const parsedData = JSON.parse(await fileContent);

Já vimos como criar um arquivo e adicionar valores a ele com o fs.writeFile(). Para anexar dados a um arquivo devemos anexar uma { flag: a } ao fs.writeFile(), por padrão wlw usa w de write, mudamos para a de append então :)

##### Summary

- Sempre usar o promises namespace nos modulos built-in. Daí poderemos usar async await para tornar o código síncrono sem travar a execução do programa
- Sem empacotar o mkdir com um try catch, podemos também usar o stat para verificar se um diretório já existe (stat não está no namespace promises)
- Para trabalhar com o parse em outros tipos de arquivo podemos buscar algo, como o papaparse para csv, lá no no npmjs.com
