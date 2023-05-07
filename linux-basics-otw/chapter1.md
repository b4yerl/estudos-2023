# Getting Started With the Basics

Primeira dica rápida lembrada no livro, e que precisei usar para utilizar o root user, é o `passwd`, no meu caso utilizei:
```sh
sudo passwd root
```

## Intro ao filesystem

Diferente do Windows, no Lnux não há uma separação física entre os drives (C: e D:), aqui o que temos é um filesystem lógico que começa no root `/`, a partir daí temos a ramificação dos diretórios:
- `/root`: O diretório home do root user
- `/etc`: Arquivos de configuração do Linux, arquivos que controlam quando e como programas são inicializados.
- `/home`: Diretório home do usuário, essa é suave.
- `/mnt`: Onde outros filesystems estão anexados ou montados ao nosso filesystem principal.
- `/media`: Aqui é onde CDs e dispositivos USB, como pen drives, são montados no sistema.
- `/bin`: Neste diretório ficam os binários das aplicações presentes no sistema.
- `/lib`: Ficam aqui as libraries, similares às DLLs do windows.

**AVISO**: Não realize tarefas cotidianas logado como root, isso porque caso alguém invada o seu computador ele automaticamente teria privilégios máximos no sistema.

## Buscas

Uma das coisas frustrantes no ínicio da adoção de sistemas Linux é justamente encontrar as coisas que procuramos. Para realizar essa tarefa de busca podemos usar o comando `locate` seguido pelo termo chave que buscamos. O problema deste comando é que ele utiliza uma base de dados própria para buscar os arquivos o que pode demorar para ser atualizada e retornar o que queremos.

Se o que buscamos for um binário, podemos usar o comando `whereis`, este além da localização do binário também entrega o local do manual quando disponível.

Um comando ainda mais específico seria o `which`, este retorna o local dos binários a partir da variável `PATH`.

Podemos ter buscas ainda mais efetivas, poderosas e flexíveis com o `find`. Podemos inferir uma sintaxe básica para o comando:
```sh
find diretório opções expressão
```

Sim, com o `find` é possível apontar de qual diretório partirá a busca. Como esperado uma busca por todo o sistema será bem mais lenta, por isso é interessante indicar um ponto de partida mais específico do que `/`, por exemplo arquivos de configuração são provav´eis de estarem no `/etc`.

Um drawback do `find`é que passando um nome, apenas resultados que batam 100% com o solicitados são retornados, para resolver isso usamos wildcars, semeçhante ao que fazemos nas ReGex.
- * para quaisquer n caracteres
- ? para um único caractere
- [x,y,z] para enumerar possibilidades

O `grep` permite filtrar keywords, sendo muito usado em pipes para pegar o output de outro comando. Um bom exemplo seria em combinação com o `ps` para filtrar determinados processos.
```sh
ps aux | grep apache2
```

## Criando Arquivos

Uma forma de criar arquivos menores é através do comando `cat`, co utilizarmos este comando junto ao simbolo de redirect, podemos inserir um texto no arquivo e salvá-lo com CTRL+D.
```sh
cat > hello
cat >> hello
```

