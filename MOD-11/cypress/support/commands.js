
Cypress.Commands.add("login_sucesso", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá, aluno_ebac20")
})

Cypress.Commands.add("login_erro_usuario", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should("contain", "Endereço de e-mail desconhecido.")

})

Cypress.Commands.add("login_erro_senha", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should("contain", "Erro: a senha fornecida")
})