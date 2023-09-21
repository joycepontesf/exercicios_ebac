/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

import usuario from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {

/* Fazendo uso de Joi, uma biblioteca JavaScript, busquei validar os dados da funcionalidade de "usuários" da api serverest com foco em garantir que eles atendem a alguns critérios e restrições contidos na documentação. */

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
              return usuario.validateAsync(response.body)
          })
      });

/* Neste teste usa-se um simples comando passando o método GET para listar todos os usuários cadastrados na API e em seguida usa-se a função "then" para validar o status code esperado pela chamada. */

    it('Deve listar usuários cadastrados', () => {
         cy.request({
               method: 'GET',
               url: 'usuarios',
         }).then((response) =>{
               expect(response.status).to.equal(200)
         })
    });

/* Dado que via de regra não se pode criar um usuário com e-mail repetido, fiz uso da biblioteca do faker para gerar nomes completos e endereços de e-mail randomicos permitindo assim focar na otimização da massa de dados e evitar retrabalho a cada teste rodado. Em seguida, validei o texto de confirmação do cadastro, bem como o status code retornado na chamada. */

    it('Deve cadastrar um usuário com sucesso', () => {
     let emailFaker = faker.internet.email()
     let nomeUsuario = faker.person.fullName()
          cy.criarUsuario(nomeUsuario, emailFaker, 'teste@123', 'true')
          .then((response) =>{
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
               expect(response.status).to.equal(201)
        }) 
    });

/* Buscando validar o comportamento de interrupção do cadastro no caso de e-mail inválido, criei um cenário onde a chamada via API envia um endereço de e-mail já cadastrado para um outro usuário. No comando customizado foi adicionado o código "failOnStatusCode: false" para garantir que mesmo na falha haveria a validação do teste. */
    it('Deve validar um usuário com email inválido', () => {
     cy.criarUsuario('Usuário EBAC Novo', 'usuarionovo789@ebac.com','teste', 'true')
     .then((response) =>{
          expect(response.body.message).to.equal('Este email já está sendo usado')
          expect(response.status).to.equal(400)
     })
    });

/* Em ambos os testes abaixo, edição e remoção de usuários, construi um código que permitisse independência do teste onde primeiro gero a massa de dados necessária para depois manipular fazendo sua edição ou remoção na base de dados. Para isso, fiz uso da biblioteca faker. */
    it('Deve editar um usuário previamente cadastrado', () => {
     let emailFaker = faker.internet.email()
     let nomeUsuario = faker.person.fullName()
          cy.criarUsuario(nomeUsuario, emailFaker, 'teste@123', 'true')
          .then((response) =>{
               let id = response.body._id
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    body: {
                         "nome": nomeUsuario,
                         "email": emailFaker,
                         "password": "teste@123",
                         "administrador": "true"
                       }
               })
          }).then((response) =>{
               expect(response.body.message).to.equal('Registro alterado com sucesso')
               expect(response.status).to.equal(200)
          })

    });

    it('Deve deletar um usuário previamente cadastrado', () => {
     let emailFaker = faker.internet.email()
     let nomeUsuario = faker.person.fullName()
          cy.criarUsuario(nomeUsuario, emailFaker, 'teste@123', 'true')
          .then((response) =>{
               let id = response.body._id
                    expect(response.body.message).to.equal('Cadastro realizado com sucesso')
               cy.request({
                    method: 'DELETE',
                    url: `usuarios/${id}`,
               }).then((response) =>{
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
                    expect(response.status).to.equal(200)
               })
          })
    });
});