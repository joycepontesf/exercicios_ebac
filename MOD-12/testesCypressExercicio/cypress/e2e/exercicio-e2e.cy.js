/// <reference types="Cypress" />

import comprarProdutos from "../support/page_objects/comprarProdutos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    /*  Como cliente 
    Quero acessar a Loja EBAC 
    Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho
    Preenchendo todas opções no checkout
    E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer pedido ponta a ponta na loja Ebac Shop', () => {

        let produto1 = "Atlas Fitness Tank"
        let produto2 = "Abominable Hoodie"
        let produto3 = "Atomic Endurance Running Tee (V-neck)"
        let produto4 = "Autumn Pullie"

        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue', 'Abominable Hoodie', 'M', 'Blue', 'Atomic Endurance Running Tee (V-neck)', 'S', 'Green', 'Autumn Pullie', 'XS', 'Purple')
        comprarProdutos.preencherDadosCompra()
        cy.get('.page-title').should("be.visible")
        cy.get('.woocommerce-notice', { timeout: 10000 }).should("contain", "Obrigado. Seu pedido foi recebido.")
        cy.get('tbody > :nth-child(1) > .product-name').should("contain", produto1)
        cy.get('tbody > :nth-child(2) > .product-name').should("contain", produto2)
        cy.get(':nth-child(3) > .product-name').should("contain", produto3)
        cy.get(':nth-child(4) > .product-name').should("contain", produto4)
    })

});
