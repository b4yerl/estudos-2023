# Access external libraries from TypeScript

## Organize code with modules

Módulos são uma maneira de organizar e categorizatr código, no permitindo agrupar códigos relacionados. Podendo separar esse código em arquivos, nós limpamos o escobo global e evitamos conflitos de nomes que possam ocorrer.

O uso dos modules se caracteriza pelo uso das keywords `import` e `export`. Enquanto a primeira nos permite consumir código externo ao arquivo atual, a segun da é responsável por tornar o componente de um module disponível para uso.

Note que se quisermos rodar o Javascript resultante em um browser, não podemos nos esquecer de adicionar o `.js` no path do `import`.

Importawnte também saber qu podemos descrever o tipo de "module loader" a ser utilizado no build, isso pode ser feito tanto via cli, quanto alterando a key "module" no tsconfig.json.

## Access external type libraries

Até então no JS, para usar libraries externas, eu usava o CommonJS mesmo com o `require`. No Tyéscript temos acesso ao `import` para trazer essas bibliotecas e seus tipos.

Static typing é a principal razão de usarmos TS. Para quase todas as libs mais comuns, já existem bibliotecas de tipos que podemos importar naquelas que não os possuem de forma nativa. O projeto open-source DefinitelyTyped é um repo de tipos para muitas libs populares do JS. No npm intalamos os tipos com o @types:
> npm install --save-dev @types\<library-name>
