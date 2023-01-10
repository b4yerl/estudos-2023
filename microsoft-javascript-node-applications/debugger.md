# Interactively debug Node.js apps with the built-in and Visual Studio Code debuggers

### Whats a debugger?

Um debugger é uma ferramenta para observar e controlar o fluxo de execução de um programa com uma abordagem anaçítica. O objetivo é nos auxiliar a encontrar a raíz de um bug e ajudar na soluação do problema. 

O principal benefício de um debugger é poder assistir a execução do código, uma linha de cada vez. As duas features mais importantes e presentes em quase todos os debuggers são:
- Controle do fluxo de execução
- Observação do estado do programa (variáveis e seus valores, parâmetros de funções, ...)

### Debug with the Node.js built-in debugger

Debugging é um processo dividido em vários passos, um caminho comum é:
- Identificar o bug no programa
- Encontrar onde está o bug
- Analisar o porquê do bug estar ocorrendo
- Corrigir o bug
- Validar a correção

Após identificar o bug, talvez o passo mais dificil é encontrar o safado. Uma das formas mais eficientes é seguir passo a passo do código, mas em códigos muito grandes podemos isolar apenas a parte que interessa settando um breakpoint.

Existem várias maeniras de definir breakpoints, mas uma forma universal de forçar o javascript debugger a pausar em um ponto é com a expressão "debugger;". Podemos então simplesmente largar um "debugger;" onde queremos interrompoer a execução.

Como medida de segurança, por padraõ o Node não interrompe um programa rodadndo a não ser que estejamos em um modo especial de inspetor. Para isso devemos rodar o programa com "node inspect index.js" ou com "node --inspect index.js"

O node-inspect debugger vai pausa o código no inicio de sua execução dispaarando o prompt inicial do debugger. A partir daí podemos passar alguns comandos para controlar a execução
- cont ou c, continua a execução até o próximo breakpoint ou o fim do programa
- next ou n, executa a próxima linnha dentro do contexto atual
- step ou s, a mesma coisa exceto que, caso seja uma chamada de função, segue para a primeira linha da função.
- out ou o, se o contexto de execução atual for dentro de uma funçãoi, executa tudo e volta pra linha na qual a função foi chamada.
- restart ou r, recomeça tudo
- setBreakpoint() ou sb, adiciona um breakpoint na linha atual
- setBreakpoint(n) ou sb(n), adiciona o breakpoint na linha n
- clearBreakpoint('index.js', n) ou sb('index.js', n), limpa o breakpont do aruivo na linha
- list(n), lista o código com n linhas antes e n linhas após o ponto atual
- exec ?, permite verificarmos uma expressão como por exemplo o valor de uma variável com exec variável.
- help
- .exit ou CTRL + D

### Debug with Visual Studio Code

O VsCode nos oferece um debugger gráfico e com mais opções fáceis de acessar do que o node-inspect.

Com o arqiuvo .js aberto selecionamos o debugger para o ambiente NOde.js. Diferente do node-inspect aqui devemos settar os breakpoints logo de cara já que o código não será pausado no início. Através do contex menu podemos também settar breakponts condicionais.

Na janela de variáveis podemos ver o escopo possível no qual cada uma se enquadra. É possível alterar o valor de uma variável com um clique duplo. Podemos adicionar variáveis para o watch panel.

Podemos usar o debug console para passar código js e checar coisas, além disso temos logpoints, uma alternativa ao console.log, para isso bastar soltar um clique direito no mesmo lugar do breakpoint, assim não corremos o risco de esquecer o console.log() pra trás, bascata passar o js {aqui}. :)
