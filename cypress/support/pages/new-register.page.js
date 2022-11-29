/// <reference types="cypress" />

const newUser = require('faker')


class RegisterPage {
    get #email() {return cy.get('#reg_email')}
    get #pass() {return cy.get('#reg_password')}
    get #register() {return cy.get(':nth-child(4) > .button')}
    get #detail() {return cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')}
    get #firstName() {return cy.get('#account_first_name')}
    get #lastName() {return cy.get('#account_last_name')}
    get #saveChange() {return cy.get('.woocommerce-Button')}

    register() {
        this.#email.type(newUser.internet.email())
        this.#pass.type("!b4X6KD0x8kJ")
        this.#register.click()
        this.#detail.click()
        this.#firstName.type(newUser.name.firstName())
        this.#lastName.type(newUser.name.lastName())
        this.#saveChange.click()

        




        

    }
 }

 module.exports = new RegisterPage()