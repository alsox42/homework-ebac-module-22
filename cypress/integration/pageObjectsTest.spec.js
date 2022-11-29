/// <reference types="cypress" />
const registerPage = require('../support/pages/new-register.page')

describe('Create account Ebac shop', () =>{
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Create a new account', () => {
       registerPage.register()
       cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
})