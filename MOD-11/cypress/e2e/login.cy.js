/// <reference types="Cypress" />

context('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    afterEach(() => {
        cy.screenshot()
        
    });

    it('Deve fazer login bem sucedido', () => {
        cy.login_sucesso("aluno_ebac@teste.com", "teste@teste.com")

    });

    it('Deve apresentar mensagem de erro para usuário inválido', () => {
        cy.login_erro_usuario("234@teste.com", "teste@teste.com")
    
    });

    it('Deve apresentar mensagem de erro para senha inválida', () => {
       cy.login_erro_senha("aluno@teste.com", "teste@teste.com")
        
    });
});

