describe('# Página de login', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home') 
        cy.intercept('POST', 'https://3076-cypress-alurapic-front.vercel.app/', {
            statusCode: 400
        }).as('stubPost')
    })

    it('Verifica mensagens de campos obrigatórios na página de login', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    })
        
        it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('larissan', 'larissa123')
        cy.wait('@stubPost')
    })

  }) 