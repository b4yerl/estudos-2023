# Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git

## The Perfect Commit

A primeira regra de ouro que devemos seguir ao realizar um commit é simplesmente, manter o commit restrito a tópicos em comum. Um exemplo seria isolar os arquivos responsáveis pelo cadastro de usuário dos arquivos de remoção de um item do carrinho...

Enfim, sabemos que o `git add` padrão pode adicionar um arquivo ao stage, mas podemos também adicionar apenas blocos de mudança. Podemos então usar um `git diff`para identificar os blocos alterados em um arquivo e depois seguir pro `git add -p`. Esse comando abre uma área de interação para escolhermos os blocos que entrarão no commit.

Para a mensagem do commit, o título deve ser conciso, tentando ficar abaixo dos 80 caracteres, mas mencionando o que consta naquele commit. Fica aqui uma dica, caso esteja difícil escrever um trecho resumido que englobe todo o commit, talvez estejamos entrando com coisa demais no commit.

Após o subject da mensagem, podemos deixar uma linha em branco para avisar ao git que viremos com o body na sequência. No corpo da mensagem podemos tentar responder algumas perguntas:
- O que agora está diferente de antes?
- Qual foi a razão para a mudança?
- Tem alguma coisa para prestar atenção, qualquer coisa particularmente memorável?

## Branching Strategies

O ideal quando trablahando em equipe é manter uma convenção de como as branches serão utilizadas. Isso porque o git fornece a ferramenta, mas não o modo que será utilizado, por organização da equipe, isso deve ser combinado e escrito.

O primeiro modelo que veremos é o Mainline Development, basicamente a ideia é sempre estar integrando código novo para produção, por isso o modelo funciona com poucas branches, sendo geralmente apenas para releases etc. O uso principal é o da `main` recebendo commits pequenos e com altos padrões de teste.

Um exemplo de modelo assim seria o Github Flow, modelo que diverge completamente do GitFlow. O GitHub flow trata basicamente de realizar as mudanças no código em uma branch separada, exclusiva à feature. Após terminadas as mudanças, com tudo pronto pro merge, abrimos a pull request direto pra main. Com a PR concluída podemos remover a branch utilizada para desenvolvimento da feature.

Outro modelo trabalha com tipos diferentes de branches como estados, features, releases, hotfixes e talz. Basicamente esas branches são divididas entre dois tipos principais. 

Long-running branches são aquelas "vivas" por muito tempo no projeto, como a `main` e a `develop`. Normalmente elas espelham os estágios no ciclo de vida da aplicação (release, deployment).

Short-lived branches geralmente existem para receber os commits diretamente, "limpando" as branches principais. Criadas com algum propósito e removidas logo após a conclusão disso.

Um exemplo que usa essas diferentes branches é o GitFlow, um modelo que funciona ao redor das feature branches, mandando pra develop, que com tudo pronto abre uma release branch que vai conversar com a main.

## Pull Requests

Pull requests não são uma feature nativa do git, essa ferramenta é entregue pelo serviço como Github e Gitlab.

O melhor exemplo para explicar o porquê de existir a pull request é o seguinte: imagine que você acabou de terminar uma feature em uma `branch` isolada e agora deseja voltar isso pra `main`. Podemos então simplesmente fazer um `merge` e já foi, mas as vezes, em features mais complexas ou onde a chance de dar errado pode ser maior, talvez eja interessante ter mais uma pessoa para revisar as alterações e aprovar o merge. Exatamente para isso servem as PRs.

Outro uso importante das PRs é para a contribuição em repositórios que não temos os direitos de controle, como um projeto open-source. Podemos por exemplo, fazer um fork do repo original, fazer as nossas alterações e abrir um pull request para a aprovação das nossas alterações no repositório original.

## Merge Conflicts