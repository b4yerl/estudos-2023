# Basics

### Packages, Scopes and Importing

Podemos usar a package clause em um arquivo para informar ao Go a qual pacote o arquivo a seguir pertence. Essa informação deve vir no início do arquivo e somente pode aparecer uma vez.

Declarações que estejam fora de funções são visíveis para arquivos que pertençam ao mesmo pacote.

Importing é tipo declarar tudo que está no dentro dos arquivos importados do package em questão no nosso próprio arquivo.
> import "fmt" // Isso meio que declara todos os arquivos do package fmt no nosso arquivo

Cada pacote tem o seu próprio escopo. Por exemplo, uma func declarada é visível aos arquivos do mesmo pacote.

Outra questão de escopo a se notar, pacotes importados só são visíveis aos arquivos que o importam. Logo cada arquivo deve importar os pacotes que pretenda usar.

Basicamente existem dois tipos de packages no Go. Executable e library.
- Library: criado para reusabilidade, não executável, importável, pode ter qualquer nome e carrega a func main
- Executable: criado pra rodar, não importável, deve se chamar main e carregar a func main

### Primeiro programa e mais

O meu primeiro "hello, world" em Go está [aqui](./examples/helloWorld.go)

Logo que escrevemos nosso código fonte, podemos rodar nosso programa com dois comandos possíveis
- go build
- go run

Importante entender que, compilado ou não, nosso código fonte é tipo a semente do programa. 

Com go build, nós compilamos nosso código em linguagem de máquina para que seja posteriormente executado, a ação ideal para deploy. Para prototipação e a gente dar aquela olhadinha podemos ir de go run
> go run main.go

/* Posteriormente vou olhar mais a fundo a diferença entre ambos */

Quanto as declarações, pontuar só que o Go adiciona o ; para separar as declaraçẽs.

// Olhar depois mais sobre GO DOC

Exporting, permite que um pacote disponibilize suas funcionalidades a outros pacotes. Para exportar um nome basta fazer ele começar com maiúscula

### Intro to variables

Para usar uma variável precisamos primeiro declarar a variável, meio que da mesma forma que o Portugol funciona.

A declaração de variável segue a seguinte sintax:
> var counter int

No início tem var, para indicar variável, o identificador único e o tipo da variável.

Para o identificador temos que seguir algumas regras:
- Começar sempre com letra ou _
- Caso comece com maiúscula ela será exportada
- Não pode conter um sinal de pontuação
- Não pode ter palavras reservadas

Como Go é uma linguagem altamente tipada, precisamos também indicar o tipo da variável. Após declarado ão podemos alterar o tipo de uma variável.

Quando declaramos a variável e não atribuimos valor, ela é inicializada em 0.

Em Go não temos o hoisting do [Javascript](../../fcc-javascript-algorithms/README.md) por isso é importante que as coisas sigam uma ordem nas declarações.

### Path Separator

Começamos essa aula com um novo pacote, o path, ele nos permite trabalhar com URL path strings. Pra essa aula usaremos a função Split, com ela podemos separar o directory e o arquivo.
> func Split(path string) (dir, file string)

Vamos analisar a função acima. Ela recebe uma string "path" e retorna duas strings, dir e file

O programa [pathSeparator.go](./examples/pathSeparator.go) mostra o uso dessa função e o uso de alguns conceitos novos como: import de dois packages, declaração de multiplas variáveis, etc.

### Quando usar short declarations?

Normal declaration
- Se não sabemos o valor inicial
- Quando precisamos de uma variável no package scope
- Para agrupar variáveis relacionadas e ter melhor legibilidade, para isso usamos var(...)

Short declaration
- A mais usada para termos código conciso
- Se soubermos o valor inicial
- Para redeclaração: mesmo que já tenhamos uma variável declarada para alterar valor, se quisermos declarar uma nova, podemos fazer as duas juntas

Podemos também usar short declarations para criar variáveis com o escopo de bloco, em um if por exemplo.

### Conversão de valores

Uma expressão de conversão de tipo em Go segue a seguinte sintax:
> type(value)

O [typeConversion.go](./examples/typeConversion.go) traz exemplos e notas quanto a conversão de valores em Go.

Daqui pra frente vou pensar se continuo linkando código e comentando o código, ou se deixo tudo aqui em .md mesmo.

### Recendo input do terminal com os.Args

Começaremos explorando o package "os", ele nos permite interagir com o sistema operacional. Para receber o input do usuário precisamos conversar com o sistema operaginal.

No pacote 'os' temos a variável "Args", um slice de strings, que o Go pega da linha de comando quando o programa é executado. Slices são as estruturas que armazenam vários valores em Go.
> var Args []string

Importante notar que Args[0] sempre vai ser o path para o programa, em "go run main.go hello", em Args[0] teremos main.go.

Quando usamos go run, o path do Args[0] será um caminho temporário, enquanto com go build gera um path permanente para o nosso executável.

>  Uma quebra rápida aqui pra falar do go build. Usando a flag -o podemos passar um nome pro nosso programa, assim compilando ele na mesma pasta atual:
>> go build -o hello

 Lembrando o python, aqui no Go temos a função len() que retorna o tamanho do slice:
 > len(os.Args)

 ### Raw string literal

 Asim como em Javascript podemos digitar uma string entre acentos graves, entretanto isso caracteriza um raw string literal.

 Uma das diferenças entre uma string literal e uma raw string literal é a possibilidade de escrever em múltplas linhas sem a necessidade de usar \n ou \t por exemplo.

Isso pode ser muito útil para códigos com muitos escape characters e com formatações.

### Length of a string

Podemos sim usar len(string) para extrair o tamanho de uma string, entretanto isso retorna quantos bytes tem a string, o problema disso é que para caracteres unicode, "não americanos", são necessários 2 bytes, um "Ç" por exemplo.

Então para realmente contar caracteres usaremos a função RuneCountInString do package "unicode/utf8". Agora sim poderemos ver um valor mais confiável.
> utf8.RuneCountInString(string)

### IOTA