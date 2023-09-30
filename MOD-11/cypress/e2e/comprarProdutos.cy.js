/// <reference types="Cypress" />

context('Adicionar produtos no carrinho', () => {

    beforeEach(() => {
        cy.visit("produtos")
    });

    it('Deve adicionar um produto no carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .eq(8)
            .click()
        cy.get('.woocommerce-product-gallery').should("be.visible")
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should("contain", quantidade)
        cy.get('.woocommerce-message').should("contain", quantidade + " × “Atlas Fitness Tank” foram adicionados no seu carrinho")

    });

    it('Valor total do carrinho deve ser a soma do valor dos produtos', () => {
        
        var valorPrimeiroProduto = 28
        var valorSegundoProduto = 36

        cy.get('[class="product-block grid"]')
            .eq(8)
            .click()
        cy.get('.woocommerce-product-gallery').should("be.visible")
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/page/2/")
        cy.get(':nth-child(2) > .page-numbers')
        cy.get('[class="product-block grid"]')
            .eq(1)
            .click()
        cy.get('.woocommerce-product-gallery').should("be.visible")
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart-subtotal > td > .woocommerce-Price-amount > bdi').should("contain", valorPrimeiroProduto+valorSegundoProduto)

    });

    it('Deve permitir remover produto do carrinho', () => {

        cy.get('[class="product-block grid"]')
            .eq(8)
            .click()
        cy.get('.woocommerce-product-gallery').should("be.visible")
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.remove > .fa').click()
        cy.get('.cart-empty').should("contain", "Seu carrinho está vazio.")
 
    });
});