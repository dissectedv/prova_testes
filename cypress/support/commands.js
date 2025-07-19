Cypress.Commands.add('login_sauce', (userName, password) => {
    cy.get('#user-name').type(userName)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})
Cypress.Commands.add('login_sauce_without_username', (password) => {
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})
