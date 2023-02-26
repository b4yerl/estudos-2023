# Dominando IDEs Java

## Visão geral da linguagem Java

Java é uma linguagem do paradigma OOP desenvolvida na década de 90 na Sun e posteriormente adquirida pela Oracle em 2008.

O programa escrito é salvo em `.java`, daí esse código passa por um processo de compilação para gerar um arquivo intermediário `.class`. Esse arquivo `.class` quando executado, é interpretado pela `JVM` em código de máquina.

Note que diferentemente de uma linguagem compilada comum, como o C em que temos a compilação em tempo de desenvolvimento, o Java é compilado para um `bytecode`que le sim é interpretado pla `JVM`.

A linguagem Java é uma coisa, a plataforma Java é outra. Algo parecido como o dotnet, aqui temos por exemplo o Ruby que também usa a plataforma Java (JVM).

Temos 3 edições diferentes do Java, SE, EE e ME. O Java standard edition é a base, enquanto a EE é a parte que cuida do desenvolvimnto web, por fim o ME é mais utilizado para dispositivos embarcados.

Basicamente o JDK serve para o desenvolvimento, no caso entra na compilação, o JRE é o responsável por fornercer as bibliotecas padrão que serão utilizadas pela JVM.