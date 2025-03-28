describe('Login Test', () => {
    it('should log in with valid credentials', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.get('input[data-qa="login-email"]')
          .type('lucasefrain9@gmail.com');
        
        cy.get('input[data-qa="login-password"]')
          .type('lucasefrain9@gmail.com');
        
        cy.get('button[data-qa="login-button"]')
          .click();
        
        cy.contains('Logged in as').should('be.visible');
    });
});