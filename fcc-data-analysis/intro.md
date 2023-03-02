# Introduction to Data Analysis

## What is Data Analysis?

Análise de dados é o processo de transformação de dados brutos e bagunçados em insights uteis através do cleaning dos dados, da transformação, manipulação e inspeção.

**Extração de dados** é onde o processo se inicia o processo todo, provavelmente esses dados estarao na própria base de dados da organização, ou serão escavados de algum local. Com os dados em mão vamos ao **Data Cleaning**, normalmente essa parte é mais facil se estivermos usando nosso próprio DB, isso porque os dados já devem estar bonitinhos, no caso do web scraping esse processo de limpeza pode ser mais trabalhoso.

**Data wrangling** é onde moldamos os dados e modificamos as estruturas para que estes esetjam prontos para a **Análise**, aqui procuramos padrões aplicando análise estatística. Somente com tudo pronto tomamos uma ação com a nossa informação.

## Jupyter Notebooks

Jupyter na verdade é todo um ecossitema de ferramentas open source, mas aqui iremos focar e aprender o básico do uso do Notebooks e do Lab.

Note que na anáçise de dados nós não visualizamos os dados o tempo todo, o que temos é uma imagem/referência de como aquilo se parece. Com os notebooks podemos organizar as ideias em um interpretador que responde nossos comandos.

O Jupyter é uma sequência de células, tudo acontece dentro das células, podemos criar células, remover etc. O ponto interessante é que a célula pode ser código ou pode ser Markdown, dessa maneira organizamos as seções diferentes.

Nossos notebooks podem ser exportados posteriormente em PDF e afins. Enfim devemos definir e indicar se a célula na qual estamos é código ou MD.

Note que todas as células tem um número que representa a sequência de execução das células para mantermos a noção da ordem com a qual o código foi e está sendo executado.

Sendo um editor baseado em diferentes modos, assim como o vim, é importante aprender os shortcuts para aumentar a eficiência com a qual utilizamos um notebook. Para adicionar uma nova célula podemos utilizar `a` para uma célula after a nossa ou `b` para uma célula before xD. Outra coisa interessante de saber é o `m` para usar markdown e `y` para python. Para executar o código podemos usar `ctrl + enter` ou o `shift + enter`.

A vantagem de um notebook está na possibilidade de visualiazção das ideias de uma análise. Podemos explorar libs como matplotlib para trazer os gráficos que precisamos para compreender nosso trabalho. Note que também temos coisas como o bokeh para intergair com os dados.
