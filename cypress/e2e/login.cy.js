describe('Automatizando testes no sauce demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Teste com usuário locked_out_user ', () => {     
        cy.login_sauce('locked_out_user', 'secret_sauce')
        cy.get('h3').contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    })
    it('Teste com senha incorreta ', () => {     
        cy.login_sauce('standard_user', 'incorrectpassword')
        cy.get('h3').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })
    it('Teste sem informar username ', () => {     
        cy.login_sauce_without_username('secret_sauce')
        cy.get('h3').contains('Epic sadface: Username is required').should('be.visible')
    })
    it('Teste adicionar produto no carrinho', () => {   
        cy.login_sauce('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('button').contains('Remove').should('be.visible')
    })
})
