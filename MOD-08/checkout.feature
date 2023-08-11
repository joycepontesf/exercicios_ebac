                        #language: pt

                        Funcionalidade: Tela de Cadastrado - Checkout

                        Como cliente da EBAC-SHOP
                        Quero fazer concluir meu cadastro
                        Para finalizar minha compra

                        Contexto: Dado que eu esteja na tela de cadastro para fazer meu registro

                        Esquema do Cenário: Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
                        Quando preencho todos os campos obrigatórios como <nome> <email_1> <CPF> <telefone> <endereco> <cidade> e <cep>
                        Então o sistema deverá autenticar meu acesso e me redirecionar para a página de checkout

                        Exemplos:

                        | nome          | email_1               | CPF            | telefone          | endereco           | cidade | cep       |
                        | João da Silva | joaodasilva@gmail.com | 023.677.895-09 | +55 85 99995-3088 | Rua das Moças, 011 | Recife | 52051-035 |

                        Cenário: Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta.
                        Quando eu tentar concluir o cadastro sem preencher qualquer um dos campos obrigatórios
                        Então o sistema deve exibir a mensagem "Preencha todos os campos marcados com asterisco"

                        Esquema do Cenário: Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
                        Quando eu inserir <email_2>
                        Então o sistema deve exibir a mensagem <mensagem>

                        Exemplos:

                        | email_2               | mensagem                                                       |
                        | joaodasilva@gmail.com | "E-mail válido"                                                |
                        | joaodasilva@gmail.123 | "Este endereço de e-mail parece ser inválido, tente novamente" |

