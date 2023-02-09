# Bootcamp Reviews and Ratings

## Review Model and Get Reviews

O que é feito aqui no início é mais trabalho braçal mesmo. A criação da Model segue muito próximo ao model Course.js, já que também há relação com bootcamps e users.

Por enquanto criamos apenas a rota getReviews. Muito similiar a getCourses, ela também aceita o redirect vindo do bootcamp resource, para retornar o find padrão. Caso isso não ocorra e tenhamos uma request vindo direto de `/reviews`, a response é jogada pro middleware advancedResults.

## Get Single Review and Update Seeder

Fazendo o que já sabemos, vamos criar um endpoint para responder um único review com o populate do bootcamp. 
```js
exports.getReview = asyncHandler( async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate({
    path: 'bootcamps',
    select: 'name description'
  });

  if(!review) return next(new ErrorResponse('Review not found', 404));

  res.status(200).json({ success: true, data: review });
});
```

## Add Review for Bootcamp

Parecido com o que já foi feito antes, precisamos adicionar o `req.params.bootcampId` e o `req.user.id` ao body, respecticvamente nas keys `req.body.bootcamp` e `req.body.user`. Com isso feito podemos checar se o bootcamp existe e na sequência criar o review.

Para garantir que um usuário escreva apenas um review para determinado bootcamp, vamos adicionar um index no ReviewSchema. Isso pode ser feito de forma muito simples com:
> ReviewSchema.index({ bootcamp: 1, user: 1}, { unique: true})

## Aggregate - Calculate Average Rating

Assim como fizemos o `statics` do `CourseSchema` para média de preço dos cursos de um bootcamp, faremos agora novamente para o rating médio.

Vamos largar o dedão no copy/paste do que já foi feito e apenas alterar onde se faça necessário.

## Update and Delete Bootcamps

Para atualizar as informações de um bootcamp, faremos um endpoint `PUT` igual já estamos acostumados. Lembre-se que devemos checar se o user logado é o dono do review ou se ele é um 'admin'.

A mesma lógica segue pro `DELETE`, a única diferença está no remove ao final, ficando algo assim:
```js
exports.deleteReview = asyncHandler( async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if(!review) {
    return next(new ErrorResponse('Review not found', 404));
  }

  if(review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse('Not Authorized', 401));
  }

  await review.remove();

  res.status(200).json({ success: true, data: {}});
});
```
