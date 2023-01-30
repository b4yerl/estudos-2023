# Strings

## Intermediate Strings

Para realizar o slice de uma string em python usamos a seguinte sintaxe:
> string[inicio:final]

Assim como no JS o final não é incluído no slice, ele serve como um muro e caso passemos um valor final maior do que o último index teremos a string até o final.

Podemos omitir valores e trabalhar com apenas um our com nenhum e copiar os valores da string. 

Podemos utilizar o operador 'in' fora de loops como um operador lógico de comparação:
```py
fruit = 'apple'
'a' in fruit # True
'b' in fruit # False
```

Podemos fazer outras comparações entre strings como por exemplo, maior que e menor que, a questão é que com iso devemos tomar cuidado quanto a letras maiúscula e minúsculas. Sendo assim pode ser interessante igualar isso antes de comparar. Os métodos a serem utilizados para esse fim são .lower() e .upper()

Podemos ver os métodos atrelados ao objeto string usando dir(). Entre esse métodos temos o .find(), com eles podemos passar um substring e teremos o index no qual a substring se inicia ou -1 caso não hja essa substring.

Diferente do JS o string.replace() aqui substitui todos os matches e não apenas o primeiro, funcionalndo como o .replaceAll() do JS.

Temos alguns métodos dedicados a cortar os espaços em branco de uma string. strip() remove tanto do início cquanto do final, mas podemos usar lstrip() e rstrip() para podar só um lado.

