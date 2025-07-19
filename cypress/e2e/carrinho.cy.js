describe('Automatizando testes no sauce demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Teste adicionar produto no carrinho', () => {   
        cy.login_sauce('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('button').contains('Remove').should('be.visible')
    })
})
