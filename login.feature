#language: pt

Funcionalidade: Login na plataforma

Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma  
Para visualizar meus pedidos

Cenário: Ao inserir dados válidos deve ser direcionado para a tela de checkout
Dado que eu acesse a página de login da EBAC-SHOP
Quando eu informar o email "joycepontesf@ebac.com.br"
E informar a senha "123456"
Então o sistema deverá me redirecionar para a tela de checkout como usuário autenticado

Cenário: Ao inserir um dos campos inválidos deve exibir uma mensagem de alerta “Usuário ou senha inválidos”
Dado que eu acesse a página de login para acessar meu cadastro
Quando eu informar o email "joycepontesf@ebac.com.br" e a senha "78910"
Então o sistema deve exibir uma mensagem "Usuário ou senha inválidos"