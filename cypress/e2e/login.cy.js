describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('LOGIN_001 - Login com sucesso', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('LOGIN_002 - Senha incorreta', () => {
    cy.login('standard_user', 'errado')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('LOGIN_003 - Campos vazios', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })
})
