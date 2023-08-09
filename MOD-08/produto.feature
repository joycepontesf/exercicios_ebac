            #language: pt

            Funcionalidade: Configurar produto

            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Cenário: Quando eu clicar no botão “limpar” deve voltar ao estado original
            Dado que existam produtos no carrinho de compras
            Quando o botão "limpar" for acionado
            Então o sistema deve zerar os produtos adicionados
            E exibir a mensagem "Você não possui itens no carrinho"

            Esquema do Cenário: Deve permitir apenas 10 produtos por venda
            Dado que eu selecione <qtd_produto> de um item
            Quando clicar em adicionar o produto ao carrinho
            Então o sistema deve exibir a crítica <mensagem_1>

            Exemplos:

            | qtd_produtos | mensagem_1                               |
            | 9            | "Itens adicionados ao carrinho"          |
            | 10           | "Itens adicionados ao carrinho"          |
            | 11           | "Quantidade de itens acima do permitido" |

            Esquema do Cenário: Seleções de cor, tamanho e quantidade devem ser obrigatórios
            Dado que eu selecione <cor>, <tamanho> e <quantidade> do item desejado
            Quando eu clicar em adicionar o produto ao carrinho
            Então o sistema deve exibir <mensagem_2>

            Exemplos:

            | cor   | tamanho | quantidade | mensagem_2                                                   |
            | rosa  | P       | 5          | "Itens adicionados ao carrinho"                              |
            | verde | PP      | 15         | "Quantidade de itens acima do permitido"                     |
            | verde | vazio   | 3          | "Selecione os tamanhos desejados"                            |
            | verde | M       | 0          | "A quantidade de itens deve ser, no mínimo, 1"               |
            | vazio | vazio   | vazio      | "Configure detalhes de cor, tamanho e quantidade do produto" |
