/*
O objetivo é validar uma senha usando regex
A senha deve conter pelo menos 8 caracteres
1 número, 1 caractere especial, 1 letra maiúscula e 1 minúscula
*/

const password = ['aaaa', 'Aa1$bbbb', '##55aaA', '_666bBbB']
const regexValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W|.*_).{8,}$/

password.map(item => console.log(regexValidator.test(item)));

/*
^ :Indica o início da string
(?=.*[a-z]) :Busca qualquer letra minúscula após 0 ou quaisquer caracteres
(?=.*[A-Z]) :Busca qualquer letra maiúscula após 0 ou quaisquer caracteres
(?=.*\d) :Busca qualquer número após 0 ou quaisquer caracteres
(?=.*\W|.*_) : Busca qualquer não alfanumérico após 0 ou quaisquer caracteres
$ :Indica o final da string
*/
