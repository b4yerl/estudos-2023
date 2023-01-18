# Final Projects

Para a conclusão do curso é necessário entregar 5 Microsserviços usando Node.js e Express. Os códigos comentados de cada um dos 5 podem ser encontrados na pasta "[/projects](./projects/)" ou acessados diretamente pelos links abaixo.

## Timestamp Microservice

Tendo 2 rotas disponíveis além da '/', essa API retorna sempre um JSON contendo 2 chaves: 'unix' e 'utc'. Para interagir com a API as rotas são:
- /api/ >>> Retorna um objeto com a data atual.
- /api/:date >>> Retorna um objeto com a data do route parameter.
