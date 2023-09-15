/// <reference types="cypress"/>

import contrato from '../contracts/produtos.contract'

/* Os testes criados neste arquivo foram desenvolvidos como parte de uma aula prática da formação em Engenheiro de Qualidade de Software da EBAC, cujo objetivo é identificar casos de teste e como o código pode ser otimizado para uma mesma situação.*/

describe('Teste da funcionalidade Produtos', () => {
    let token
    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn =>{ token = tkn })
    });

/* Teste de contrato usando a biblioteca "joi" */

    it('Deve validar contrato de produtos', () => {
        cy.request('produtos').then(response => {
            return contrato.validateAsync(response.body)
        })
    });

/* Neste primeiro teste, estamos solicitando informação de uma api SERVEREST para que ela liste, a partir do método GET, os produtos já criados */

    it('Listar produtos', () => {
        cy.request({
            method: "GET",
            url: 'produtos'
        }).then((response) =>{
            expect(response.body.produtos[13].nome).to.equal('Garrafas de Água 5834628')
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(20)
        })
    });

/* Aqui, temos um cenário de cadastro de produto randomico usando funções javascript de maneira nativa. Otimizando o tempo que se levaria para criar uma massa de dados para cadastrar novos produtos */

    it('Cadastrar produto', () => {
        let produto = `Garrafas de Água ${Math.floor(Math.random() * 100000000)}`
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers: {authorization: token},
            body: 	{
              "nome": produto,
              "preco": 180,
              "descricao": "Garrafa Térmica de Água, mantém sua bebida gelada ou quente.",
              "quantidade": 100
            },
        }).then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });

/* Em seguida, buscamos validar que o sistema não permite o cadastro de itens com informação de nome duplicado. */


    it('Deve validar mensagem de erro no cadastro de produto duplicado', () => {
        cy.cadastrarProdutos(token, "Iphone 11", 5000, "Celular novo", 50)

        .then((response) =>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Já existe produto com esse nome')

        });
    });

/* Também com foco em otimização e refatoração do código, criamos um cenário onde há uma chamada na API para edição de um produto previamente cadastrado. Usamos um método para capturar o ID de um produto e transformá-lo em variável permitindo seu uso em seguida. */

    it('Deve editar um produto já cadastrado', () => {
        cy.request('produtos'). then(response =>{
            let id = response.body.produtos[8]._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: {authorization: token},
                body: {
                    "nome": "Monitor Dell Prateado",
                    "preco": 630,
                    "descricao": "Mouse vertical",
                    "quantidade": 500
                }
            }).then((response) =>{
                expect(response.body.message).to.equal("Registro alterado com sucesso")
            })
        })
    });

/* Neste exemplo, também testamos a edicão de um produto já cadastrado. No entanto, diferente do cenário acima, para não dependermos de informações imputadas no banco de dados, usamos comandos customizados + função javascript para criar um produto randomico, guardar o ID desse produto e em seguida chamá-lo para edição. */

    it('Deve editar um produto cadastrado previamente', () => {
        let produto = `Garrafas de Água ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProdutos(token, produto, 100, "Descrição do produto", 50)
        .then(response =>{
            let id = response.body._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: {authorization: token},
                body: {
                    "nome": produto,
                    "preco": 500,
                    "descricao": "Mouse Logitech",
                    "quantidade": 500
                }
            }).then((response) =>{
                expect(response.body.message).to.equal("Registro alterado com sucesso")
            })
        })

    });

/* Por último, excluímos um produto cadastrado usando o comando DELETE e, de maneira similar ao caso acima, primeiro cadastramos o produto, salvamos seu ID e em seguida o deletamos chamando este mesmo ID que está guardado em uma variável. */

    it('Deve excluir um produto já cadastrado', () => {
        let produto = `Relógio ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProdutos(token, produto, 1000, "Descrição do produto", 50)
        .then(response =>{
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                url: `produtos/${id}`,
                headers: {authorization: token},
            })
        }).then((response => {
            expect(response.body.message).to.equal("Registro excluído com sucesso")
            expect(response.status).to.equal(200)
        }))

    });

});