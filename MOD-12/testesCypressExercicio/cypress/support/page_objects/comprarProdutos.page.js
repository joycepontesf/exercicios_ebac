const { faker } = require('@faker-js/faker');

class comprarProdutos {

    preencherDadosCompra() {
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#billing_company').type(faker.company.name())
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type("Estrada Arraial" + "001")
        cy.get('#billing_city').type("Recife")
        cy.get('#select2-billing_state-container').click().type('Pernambuco').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').type("52051-500")
        cy.get('#billing_phone').type("8199999000")
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should("be.visible")
        cy.get('.woocommerce-notice').should("contain", "Obrigado. Seu pedido foi recebido.")

    }

    preencherDadosCompraNovoUsuario() {
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#billing_company').type(faker.company.name())
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type("Estrada Arraial", + "001")
        cy.get('#billing_city').type("Recife")
        cy.get('#select2-billing_state-container').click().type('Pernambuco').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').type("52051-500")
        cy.get('#billing_phone').type("81999999999")
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type(faker.internet.password(), { log: false })
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice', { timeout: 10000 }).should('exist')
        cy.get('.woocommerce-notice').should("contain", "Obrigado. Seu pedido foi recebido.")
        
    }
}
export default new comprarProdutos()