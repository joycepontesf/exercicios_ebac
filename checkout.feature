#language: pt

Funcionalidade: Tela de Cadastrado - Checkout

Como cliente da EBAC-SHOP
Quero fazer concluir meu cadastro   
Para finalizar minha compra

Cenário: Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
Dado que eu esteja na tela de checkout da EBAC-SHOP prestes a finalizar minha compra
E eu não tenha inserido meus dados de login
Quando o sistema identificar que não estou autenticada
Então deverá ser solicitado que eu acesse com minha conta ou crie um novo Usuário
E ao optar por fazer meu cadastro somente seja possível avançar de volta para o checkout após preencher todos os campos marcados com asteristico

Cenário: Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
Dado que eu esteja na página de checkout prester a concluir minha compra
E o sistema solicite a inclusão de um endereço de e-mail válido
Quando eu inserir "joyce@google.123"
Então o sistema deve exibir a mensagem "Este endereço de e-mail parece ser inválido, tente novamente"

Cenário: Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta.
Dado que eu tente concluir meu cadastro sem informar meu CPF
Quando eu tentar avançar no processo de cadastro
Então o sistema deve exibir uma mensagem "O campo CPF não pode ficar em branco"