describe('Testes de Sanidade na Página de Login - Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('LOGIN_001: Deve realizar login com sucesso usando credenciais válidas (standard_user)', () => {
        cy.login('standard_user', 'secret_sauce');

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('LOGIN_002: Deve exibir mensagem de erro para usuário inválido', () => {
        cy.login('usuario_invalido', 'secret_sauce');

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('LOGIN_003: Deve exibir mensagem de erro para senha inválida', () => {
        cy.login('standard_user', 'senha_invalida');
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('LOGIN_004: Deve exibir mensagem de erro para usuário bloqueado (locked_out_user)', () => {
        cy.login('locked_out_user', 'secret_sauce');
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

});
