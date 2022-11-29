/// <reference types="cypress" />

describe('Access Ebac Shop go for Checkout', () =>{
    beforeEach(() => {
       cy.login("alccpe@yahoo.com.br", "mhYy6As4h9JPNFU")
    });

    it('Redirect checkout', () => {
        cy.visit('/checkout')
       
       
      
    })
})