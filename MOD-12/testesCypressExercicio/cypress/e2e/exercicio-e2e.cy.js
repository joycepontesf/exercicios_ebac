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
        cy.visit('produtos/')
    });

/* Neste primeiro caso de teste foram utilizados comandos customizados para encapsular as linhas de código relacionadas a seleção dos produtos e page objects para o preenchimento da massa de dados pessoais do comprador fictício. No entanto, neste CT faz-se todo o processo sem que haja a criação de um novo usuário no site da LOJA EBACSHOP. */

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta sem criar nova conta', () => {
        cy.addProdutosCT01('Atlas Fitness Tank', 'S', 'Blue', 'Abominable Hoodie', 'M', 'Blue', 'Atomic Endurance Running Tee (V-neck)', 'M', 'Yellow', 'Autumn Pullie', 'XS', 'Purple')
        comprarProdutos.preencherDadosCompra()

    });

/* Já neste segundo caso de teste, onde também foram utilizados comandos customizados para encapsular as linhas de código relacionadas a seleção dos produtos e page objects para o preenchimento dos dados pessoais do comprador fictício, há a criação de um novo usuário no site da LOJA EBACSHOP. */

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta criando nova conta', () => {
        cy.addProdutosCT02('Atlas Fitness Tank', 'M', 'Blue', 'Abominable Hoodie', 'M', 'Blue', 'Atomic Endurance Running Tee (V-neck)', 'M', 'Yellow', 'Autumn Pullie', 'XS', 'Purple')
        comprarProdutos.preencherDadosCompraNovoUsuario()

    });

})
