describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('LOGIN_001 - Login com sucesso', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('LOGIN_002 - Senha incorreta', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('errado')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('LOGIN_003 - Campos vazios', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })
})
