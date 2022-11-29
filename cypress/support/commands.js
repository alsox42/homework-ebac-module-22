/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', '5fe0ea7a59' )
    fd.append('_wp_http_referer', '/minha-conta/')
    fd.append('login', 'Login')
   

    cy.request({
        url: '/minha-conta',
        method: 'POST',
        body: fd
    }).then(resp => {
            resp.headers['set-cookie'].forEach(cookie => {
                const firstPart = cookie.split(';')[0]
                const divisor = firstPart.indexOf('=')
                const key = firstPart.substring(0, divisor)
                const value = firstPart.substring(divisor+1)
                cy.setCookie(key, value)
            })
        })

        

})