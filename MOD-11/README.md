## Sobre o Módulo 11

Após estudar sobre Automação de Testes com Cypress, Hooks, Faker, Listas e Variáveis, como atividade da formação em Engenheiro de Qualidade de Software da [EBAC (Escola Britânica de Artes Criativas e Tecnologia)](https://ebaconline.com.br/engenheiro-de-qualidade), criei testes end-to-end para três features:

* Comprar produtos, incluindo-os no carrinho
* Login na plataforma ecommerce
* Pré cadastro

Na funcionalidade de [__compra de produtos__](https://github.com/joycepontesf/exercicios_ebac/blob/main/MOD-11/cypress/e2e/comprarProdutos.cy.js), foram criados 3 casos de teste (Deve adicionar um produto no carrinho; Valor total do carrinho deve ser a soma do valor dos produtos; e Deve permitir remover produto do carrinho).

Já na funcionalidade [__login__](https://github.com/joycepontesf/exercicios_ebac/blob/main/MOD-11/cypress/e2e/login.cy.js), foram criados 3 casos de teste (Deve fazer login bem sucedido; Deve apresentar mensagem de erro para usuário inválido; e Deve apresentar mensagem de erro para senha inválida). Para desenvolvimento desses casos de teste com Cypress utilizei o arquivo [commands.js](https://github.com/joycepontesf/exercicios_ebac/blob/main/MOD-11/cypress/support/commands.js), presente na pasta "support" para otimização das linhas de código.

Por último, na funcionalidade [__pré cadastro__](https://github.com/joycepontesf/exercicios_ebac/blob/main/MOD-11/cypress/e2e/preCadastro.cy.js), foram desenvolvidos 2 casos de teste (Deve criar um novo usuário e alterar seus dados com sucesso; e Não deve permitir criar usuário com email repetido) fazendo uso da biblioteca Faker para geração de dados randômicos de usuário e senha.

__Nesta pasta você encontrará:__

1. As diretrizes para execução do exercício
2. Arquivo gerados automaticamente via Cypress
3. Pasta contendo os arquivos intitulada "Cypress" > "e2e"
4. Arquivo "comprarProdutos"
5. Arquivo "login"
6. Arquivo "preCadastro"
