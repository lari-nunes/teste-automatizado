describe('# Página de login', () => {
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home') 
    });
  
    it('Preencher campos de login corretamente para realizar o login', () => { 
      cy.login("teste123", "teste321"); 
    });
  });