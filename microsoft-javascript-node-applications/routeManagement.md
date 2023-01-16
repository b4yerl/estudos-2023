# Introduction to route management in Node.js with JavaScript

### URLs e rotas

URL é um endereço utilizado por um client para localizar um servidor específico e acessar um recurso específico. Aqui podemos divir a URL em algumas partes para analisarmos a seguir.
> scheme:[//authority]path[?query][#fragment]

A primeira parte, o scheme, simplesmente indica qual o protocolo será usado, http, https, ftp, irc, etc.

A parte de authority pode começar com um username opcional seguido de um host. A gente usa muito o host localhost por exemplo. Na web normalmente a parte do host fica para algum dominio como microsoft.com. Esse nome é mais amígavel do que o IP, que esse sim é o endereço real, aqui entramos na parte de DNS.

O path pode ter 0 ou mais segmentos, sendo estes separados por '/'. Com esses segmentos filtramos exatamente o conteúdo que queremos acessar.

A parte de query é opcional, iniciada após a '?', trata-se de uma seqência de pares key-value separados por '&' ou ';'. Podemos usar a query para filtrar a página e afins.

A rota é justamente a subseção da URL que filtra um conteúdo específico. O parâmetro de uma rota entra mais ainda filtrando por exemplo um id exato que queremos, por exemplo:
> orders/1/items/2

Essa rota acima pega o id 1 das orders e lá dentro busca o item de id 2. O Express usa alguns Handlers para bater os patterns de uma rota e nos auxiliar no gerenciamento das rotas:
<table>
  <thead>
    <tr>
      <th>
        Rota
      </th>
      <th>
        Express pattern
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        /products
      </td>
      <td>
        products/
      </td>
    </tr>
    <tr>
      <td>
        /products/169
      </td>
      <td>
        products/:id
      </td>
    </tr>
    <tr>
      <td>
        /orders/1/items/2
      </td>
      <td>
        orders/:oId/items/:itmId
      </td>
    </tr>
  </tbody>
</table>

Esses parâmetros de rotas ficam em uma propriedade 'params' do objeto req. Na tabela acima se quisermos acessar o id do products teŕiamos algo como:
> req.params.id

Já os parâmetros das querys também podem ser acessados através de uma propriedade do objeto req. Quando a query é passada, nós podemos acessar as chaves pelo req.query.nomeKey, isso retorna o valor associado àquela chave. Ou seja, a propriedade query, é na verdade um objeto com os pares key-value.

### Read and Write

Para lidar com o Client enviando dados pro nosso web app, configuramos o Express de formas distintas a depender do tipo de dado esperado, mas alguns passos são comuns independente do tipo:
- Importar um body-parser: Precisamos converter os dados que estão chegando para um formato que possamos utilizar. Importe então a library body-paser que é instalada junto ao Express.
- Configurar o tipo de dado: Configurar o parser para o formato desejado, abaixo um exemplo com JSON:
> app.use(bodyParser.json({ extended: false }));

Após isso os dados enviados pelo client estarão disponíveis no req.body, com isso podemos ler esses dados parar criar um recurso ou atualizar algo no nosso banco, atravé de POST ou PUT.

Enquanto o app.post() diz ao express que queremos criar um recurso, o app.put() diz que algo deve ser atualizado com os dados recebidos.