# Learn Bash by Building a Boilerplate

### Navegação básica

Não vou escrever aqui desde o começo os comandos como pwd, ls, cd... Vou deixar as anotações pra coisas que eu ache necessário fixar, coisas que um pouco menos cotidianas ou que eu não tenha tanto domínio.

Ao invés de usar "cat" (concatenate) para ver o que tem dentro do arquivo, vou começar a usar "more arquivo".

A flag -l nos permite obeter mais informações junto ao ls padrão.

O comando find nos permite ver toda a file tree a partir do diretório atual, organizando tudo por linhas. Podemos também passar "find diretório" para ver a file tree a partir do ponto indicado.

Com a flag -name, o comando find retorna o path para um arquivo ou pasta especificada:
> $ find -name index.html // ./client/src/index.html

