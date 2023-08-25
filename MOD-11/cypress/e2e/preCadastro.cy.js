/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

context('Cadastro de novo usuário', () => {
    
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve criar um novo usuário e alterar seus dados com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta")
    });

    it('Não deve permitir criar usuário com email repetido', () => {
        cy.get('#reg_email').type("Araceli.Bednar@gmail.com")
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error'). should("contain", "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.")
    });

});