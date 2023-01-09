# Gerenciando Pacotes com NPM

npm (Node Package Manager) é uma ferramenta de linha de comando para instalar, criar e distribuir pacote de código Javascript escrito para Node.js.

### Como usar o package.json, o núcleo de qualquer projeto Node.js

O arquivo package.json é o centro de todos os projetos Node.js ou pacotes npm. Ele armazena informações sobre o nosso projeto, de forma similar a como a tag \<head>, em um HTML, descreve o conteúdo da página.

O arquivo consiste em um único objeto JSON no qual as informações são guardadas em pares key-value. Somente dois campos são obrigatórios: "name" e "version", mas é boa prática prover informações adicionais nesse documento.

Uma das informações mais comuns que encontramos no package.json é o "author". Ela especfíca quem criou o projeto e consiste de uma string ou de um objeto com outras informações e detalhes.

### Adicionando descrição e keywords ao package.json

O campo "desciption" carrega uma bre, porém informativa descrição do projeto.

Se algum dia for de interesse publicar um pacote no npm, é nessa string que vendemos nosso peixe. Entretanto, este não é op único uso da "description", ela pode resumir também o que faz o projeto.

No campo "keywords" passamos um array com termos que descrevam o nosso projeto.

### license e version

É no campo "license" que inbformamos aos usuários o que eles podem fazer com o projeto. Entre licensas comuns para projetos open source temos a MIT e a BSD.

Uma "version" é um dos campos obrigatórios do nosso package.json. Esse campo descreve a versão atual do projeto.

### Expandindo o projeto com pacotes externos do npm

Uma das principais razões pela qual usamos um gerenciador de pacotes é o seu poderoso gerenciamento de dependências. Ao invé de manualmente ter de garantir que todas as dependencias estão no lugar sempre que settamos o projeto em um novo computador, o npm instala tudo automaticamente.

Para saber exatamente o que o nosso projeto precisa o npm vai ao campo "dependencies" no nosso package.json.
> "package-name": "version" // esee é o modelo no objeto dependencies

### Entendendo a semântica das versões

As versões dos pacotes npm dentro da seção de dependencies do package.json, seguem o que chamamos de Semantic Versioning (SemVer), o padrão da industria que visa facilitar o versionamento e gerenciamento de dependencias.

> "package": "MAJOR.MINOR.PATCH"

A versão MAJOR incrementa quando fazemos mudanças incompatíveis com versões anteriores, MINOR para novas features que não quebram versões anteriores e PATCH para bug fixes.

Como não queremos, na maioria dos casos, perder os bug fizes, podemos sinalizar no package.json que queremos a mais recente versão de PATCH, para isso adicionamos um "~" à frente do MAJOR, prefizando a versão.

Agora, para instalar não só PATCH, mas também MINOR automaticamente, mantendo assim as ultimas features daqwuela MAJOR disponíveis, usamos o prefixo "^".