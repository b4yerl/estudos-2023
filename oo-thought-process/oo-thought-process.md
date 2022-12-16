# Object-Oriented Thought Process

## Chapter 2 - How to think in terms of objects

Uma das chaves pra um design forte orientado a objetos, passa por entender a dfrença entre interace e implementação. Ou seja, o que o usuário precisa saber e o que eçe não precisa saber. O mecanismo de data hiding inerente ao encapsulamento é o meio para que essas informções não essenciais sejam escondidas.

  O exemplo dado para compreender isso é o de uma torradeira. A torradeira se liga a uma interface, a tomada, para conseguir eletricidade, a implementação, ou melhor, como a energia foir produzida, isso não importa desde que a eletricidade venha corretamente da tomada.

Uma mudança na implementação não deve gerar impactos no usuário, diferentemente de uma mudança na interface.
  Entenda aqui o termo <i>usuários</i> como designers e desenvolvedores e não como o end-user propriamente dito.

### Interface

Os serviços apresentados ao usuário final constituem a <b>interface</b>, via de regra a interface deve conter apenas aquilo que o usuário precisa saber, no exemplo da torradeira seria saber da necessidade de plugar na tomada e de como operar a torradeira.

Talvez a consideração mais importante no design da classe pe identificar que é a audiência, os usuários.

### Implementação

Os detalhes da implementação sçao escondido do usuário e sempre devemos lembrar de uma regra: Uma mudança na implementação <b>NÃO</b> deve requerer uma mudança no "código do usuário".

Lembre que a interface inclui a sintaxe para chamar um método e o valor de retorno, se a interface não muda, o usuário não se importa com mudanças na implementação.

Podemos pensar em um telefone, a interface é simples, para fazermos uma ligação discamos o número, ao longo dos anos a implementação disso foi se alterando, mas a interface se manteve. Mudanças na interface, implicam uma mudanla de comportamento, o que o meio dos negócios tende a evitar.

Separar a interface da implementação pode poupar muita dor de cabeça com o tempo.

### Using abstract thinking

Uma das grandes vantagem da orientação a objetos é o reuso das classes. No geral, classes reutilizáveis tendem a ter interfaces que sejam mais abstratas. Interfaces concretas são mais específicas, enquanto interfaces abstratas são mais gerais. Só cuidado porque nem sempre uma interface generalista é mais útil que uma concreta.

Aqui agora, nosso objetivo é extrair o máximo da OO, logo, buscamos classes muito abstratas e reutilizáveis. Vamos por exemplo criar uma classe TAXI, que nos leve até o aeroporto. Uma interface concreta seria passar as ações como 'vire a direita, siga reto, direita, esquerda, reto' visando o aeroporto, mas não é isso que queremos nos preocupar, uma interface abstrata seria um simples 'me leve ao aeroporto'. Perceba então que a interface abstrata pode ser usada em qualquer cidade, sem preocupação do usuário com a direção a a ser tomada, mas sabendo que essa implementação muda de cidade pra cidade.

### Providing the minimal user interface

A regra geral no design da classe deve ser prover as necessidades do usuário com o mínimo de conhecimento quanto ao funcionamento interno da classe, para isso siga algumas regras:

- Dê ao usuário apenas o que ele realmente precisar. Na prática, isso significa que a classe tem o mínimo de de interfaces possíveis. De início comece realmente com o mínimo, a medida que for necessário, volte e adicione mais.
- É melhor adicionar interfaces porque os usuários realmente precisam, do que dar mais do que é necessa´rio.
- Interfaces publicas definem o que pode ser acessado. Se inicialmente escondermos toda a classe, tonrando-a privada, teremos que adicionar a interface pública gradvtivamente, mudando o modificador de acesso.
- É vital fazer o design das classes a partir de uma perspectiva do usuário, pensando no ease-of-use.
- Passe pelos requisitos e pelo design com pessoas que utilizarão aquelas classes.

### Determining the Users

No caso do Taxi, o usuário não é somente o consumidor, o taxista também é usuário, ou seja para termos uma interface realista, tanto taxitas quanto cconsumidor, devem ser considerados useras. Em suma, qualquer objeto que interaja com o nosso <b>objeto Taxi</b> deve ser posto como um usuário.

### Object Behavior && Enviromental Constraints

Com os users identificados, devemos definir o comportamento do objeto. Partimos do propósito de cada objeto e o que ele precisa pra fazer aquilo corretamente. Provavelmente muitas escolhas aqui não serão mantidas no final, mas essas escolhas são feitas a partir dos rquisitos.

As restrições impostas pelo ambiente, são por exemplo as limitações de um hardware, como conexão à internet, determinado modelo de imp´ressora, etc.

### Identifying the Public interfaces and the Implementation

Como sempre, identificar as interfaces é um processo iterativo. Para cada interface, precisamos determinar se ela contribui para a operação do objeto.

Muitos textos sobre OO recomendam que cada interface modele apenas um comportamento. O cuidado aqui é que para as coisas se mantenham lógicas, mas também para que o usuário não deixe de saber algo necessário.

Após o design da classe e que todos os métodos necessários para que a classe seja operada adequadamente, estejam no lugar, aí começamos a parte específica de fazer a classe funcionar.

Tecnicamente, tudo que não seja a interface pública, faz parte da implementação. Isso significa que o usuário nunca vai ver aqueles métodos, nem mesmo suas assinaturas.

É possível termos um método privado para ser utilizado internamente na classe. Por exemplo, em um método changePassword() público podemos chamar um método privado de criptografia dessa senha, esse método está escondido do usuário.

Ou seja, a interface representa como o usuário vê o objeto, mas é na implementação que está o código todo.

## Chapter 3 - More Object-Oriented Concepts

### Constructors

Em algumas linguagens o construtor tem o mesmo nome da classe e não retorna nenhum valor, assim o compilador consegue reconhecer o construtor.

Quando criamos o objeto, a keyword new instancia este objeto alocando o espaço necessário em memória, na sequência o construtor é chamado passando os argumentos na lista de parâmetros.

Talvez a função mais importante de um construtor, seja inicializar um objeto assim que o new é executado. Ou seja, o código dentro do construtor deve incializar o objeto e seus atributos para seu estágio inicial, segure e estável.
Essa inicialização de atributos talvez seja a função mais comum de um construtor.

### The Default Constructor

Mesmo que nós não explicitemos um construtor, é importante saber que haverá um construtor implicíto gerado automaticamente, toda classe sempre terá algum tipo de construtor.

Além da criação do objeto em si, a única ação contida em um constutor padrão é chamar o construtor de sua super class, como no C#, um construtor padrão chamaria o construtor do Object.

De quqlquer forma, é sempre uma boa prática incializarmos nossos atributos qando eles existirem em uma classe. Enfim, no geral mesmo que não precisemos fazer uso de um consrutor, é interessante deixar um lá para a egiblidade do código e sua clareza, mesmo sabendo que podemos contar com o construtor padrão.

### Multiple Constructors

Em muitos casos, um objeto pode ser construído de mais de uma maneira, por exemplo, se tivermos em um objeto o número de vitórias de determinado atleta, podemos ter um construtor sem parâmetros inicializando este atributo em 0 e também podemos ter um construtor que recebe como parâmtro o número de vitórias com as quais aquele atributo será inicializado.

Este é o overloading de um método, na verdade overloads estão presentes em todo e qualquer método, não apenas para construtores.
Overloading permite que usemos o mesmo nome de método várias vezes, contanto que a assinatura se mantenha diferente, ou seja, que tenha oura lista de parâmetros. Em C# a assinatura é composta apenas pelo nome + os parâmetros, ou seja, o tipo de retorno não compõe a assinatura do método.

Assim, usando assinaturas diferentes, podemos nos preparar pra construir nosso objeto mesmo que não saibamos de determinada informção previamente, por exemplo, em um carrinho de compras, se o cliente for novo ele será incializado vazio, mas se ele tiver itens no carrinho vinculados a outras sessões, ele pode ser então incializado da forma como estava.

### Superclass

Quando usamos herança, devemos ter ciência de como a classe pai foi construída. A herança de um atributo é algo bem óbvio, mas a herança de um construtor nÃO é tanto.

Após a palavra new ser encontrada e o objeto alocado, ocorre o seguinte:
- Dentro do construtor, haverá uma chamada pro construtor da classe pai, se não for explícito, há uma chamada padrão.
- Após isso, aí sim os atributos de classe  do objeto serão inicializados
- O resto do construtor é executado

### Error Handling

Exitem basicamente 4 formas de lidarmos com erros e problemas no nosso programa:
- Ignorar o problema
- Checar por potenciais problemas e encerrar o programa caso algo seja encontrado
- Checar por potenciais problemas, pegar o erro e tentar trata-lo
- Disparar uma exceção

### Ignoring the Problem

O pior caminho possível, simplesmente ignorar o problema é receita pro desastre, existem altas chances de que o seu prgrama irá encerrar repentinamente em algúm momento ou pior, irá continuar funcionando de forma instável e com potenciais dados corrompidos, o que pode dificultar a identificação do problema.

### Checking for Problems and Aborting the Application

Aqui o cminho começou a melhorar, podemos ao encontrar um problema, encerrar o programa e entregar uma mensagem de ssaída ao usuário, ok, a coisa não melhorou tanto, mas já é bem melhor do que simplesmente ignorar o problema.

### Checking for problems and Attempting to Recover

Agora sim já estamos em um caminho mais atraente, aqui vamos tetntar detectar um problema no código e vamos oferecer um tratamento para que o programa mantenha a execução, por exemplo
	if (a == 0) a = 1;
	c = b / a;
Nesse caso acima, repare que a condicional só entra em campo para corrigir uma possível divisaão por 0, para isso ele usa um valor padrão de 1, mas isso não é o ideal, já que podemos obter um resultado não desejado, o ideal qui seria pedir novamente ao usuário para que um novo valor fosse inserido.

Apesar dessa solução ser melhor do qe as outras, ela tem seus problemas. Nem sempre saberemos de antemão onde vai aparecer um erro.

É sempre importante desenhar o trato de erros na nossa classe desde o início.

### Throwing an Exception

Na maneira mais simples possível, exceções são eventos inesperados que ocorrem no sistema. Elas provem um meio de detectar e tratar problemas. Esse tatamento ocorre com "try catch" e com "throw".

O lance aqui é que podemos escrever um bloco de código específico para lidar com uma exceção, o que resolve o problema de ter que saber onde o problema começou.

A estrutura de um try catch é a seguinte:
	try {
		// possível código problemático
	} catch(Exception) {
		// bloco para tratamento da exceção
	}
Se a exceção for pega dentro do bloco try, o blco catch entra em ação para lidar com o problema, ocorrendo na seguinte ordem:
- A execução do bloco try é encerrada
- A clausúla do catch é verificada para ver se aquele é o bloco apropeiado para o tratamento da exceção em questão (pode haver mais de um catch por bloco try)
- Se nenhuma clausúla for suficiente, a exeção é passado pro try de nível mais alto.
- Assim que encontrado algo satisfatório, o catch é executado

Essas exceções podem ser pegas tanto de forma específica, quanto de forma genérica, o importante é que elas possam ser tratadas a fim de evitar que o programa crashe. É interessante, usar das formas de se tratar error para tornar o progrma o mais "a prova de usuário" possível.

### The Importance of Scope
