# Javascript Tooling e ES6 Modules

### Babel e "can i use..."

Um dos problemas existentes na programaçõ para browsers é o suporte às tecnologias mais novas do Javascript, por exemplo, muitas das coisas mais novas que temos não tem suporte no Internet Explorer que, apesar de obsoleto ainda tem uma base de usuários.

Para verificarmos se um recursos é suportado pelos navegadores podemos usar o site caniuse.com, ele nos retorna um score com o suporte em cada um dos principais navegadores do mercado.

Temos dinponível uma ferramenta, o Babel, um transpiler que faz justamente essa tradução para que haja a compatibilidade do nosso código.

Para utilizar o Babel precisamos trazer o package pro nosso projeto com o npm usando o seguinte:
> npm i --save @babel/cli @babel/preset-env @babel/core

Após isso para rodar o babel no nosso arquivo devemos fazer o seginte
> npx babel ARQUIVO.js -o bundle.js --presets=@babel/env

Com isso feito o arquivo que usríamos no fim de tudo seria o bundle.js, assim podemos programar o script com o ES6 bunitim e daí com o babel garantimos que ele rode em browsers antigos.

Como estamos agora em um projeto node podemos usar o package.json para passar esse comando lá excluindo apenas o prefixo npx e acrescentando o -w de watch. Dessa maneira o Babel vai ficar bizoiando a gente enquanto codamos e salvamos o arquivo.

### Webpack (boilerplate)

Como a configuração do webpack pode ser grande e repetitiva, vamos fazer um boilerplate. Vamos usar algumas dependências no nosso projeto: @babel/cli, @babel/core, @babel/preset-env, babel-loader, webpack, webpack-cli, regenerator-runtime e core-js.

Nosso arquivo deve se chamar webpack.config.js. Vamos basicamente importar o path module e nosso objeto de configuração do webpack já vai ser escritp direto no module.exports.

Vou nem me arriscar a trazer a configuração pra cá, mas a criança tá [aqui](./webpack-boilerplate/webpack.config.js)

Aparentemente não funcionou aqui, mas como eu provavelmente nunca vou usar isso na minha vida, sayonara

## ES6 Modules - import/export

Vou trazer aqui só alguns pontos relacionados a essa aula de modules, como já venho usando eles, muita coisa não é novidade.

Além do import...as podemos também fazer o oposto, exportar algo com um alias. O export default serve para exportarmos um valor sem dar a ele um nome específico, sendo assim na hora do import, o nome passado fora de chaves será o nome dado ao valor exportado como default.

