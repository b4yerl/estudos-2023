# Learn SQL by Building a Student Database

## PART I

Vamos usar 2 arquivos .csv para alimentar nossas tabelas nesse projeto.

Primeiro fizemos toda a criação das tabelas usando !!!MUITOS!!! ALTER TABLE...........

Enfim depois de tudo vamos alimentar nossas tabelas com os dados dos arquivos .csv, para isso vamos criar um shell script.

Para isso vamos usar um pipe '|' para mandar os dados do csv lidos com cat, direto para um loop. Note que temos uma variavel global IFS que define como separar os campos, iremos alterar par ',':
```sh
cat courses.csv | while IFS=',' read MAJOR COURSE
do
  <MANIPULAR $MAJOR E $COURSE>
done
```

Dentro dessa área de manipulação dos dados teremos que seguir algumas etapas para checagem e inserção dos dados
- buscar o major_id
- caso não seja encontrado, inserir o novo major e buscar o novo id
- buscar o course_id
- caso não seja encontrado, inserir o novo course e buscar o novo id
- inserir a dupla de ids na junction table, majors_courses

Vamos fora do nosso loop declarar uma variável PSQL para passarmos comandos ao postgres da seguinte maneira:
> PSQL="psql --username=freecodecamp --dbname=students -c"
 
Tem mais flags, mas deixei só essas pela importância do -c no nosso código, essa flag indica que a conexão é cortada após um único comando, dessa maneira podemos abrir uma conexão a cada nova iteração.

Nosso código para a parte do major por exemplo fica assim:
```sh
MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")

if [[ -z $MAJOR_ID ]]
then
  INSERT_MAJOR=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
  if [[ $INSERT_MAJOR == "INSERT 0 1" ]]
  then
    echo Inserted into majors, $MAJOR
  fi
  MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
fi
```