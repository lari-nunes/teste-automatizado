describe('# Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => { 
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home') 
    cy.contains("a", "Register now").click();
    cy.get('[data-test="email"]').type("teste123@gmail.com");
    cy.get('[data-test="fullName"]').type("teste924");
    cy.get('[data-test="registerUserName"]').type("teste123");
    cy.get('[data-test="registerPassword"]').type("teste321");
    cy.contains("button", "Register").click();
  });

//   beforeEach(() => {
//       cy.visit("https://www.amazon.com.br/") // o beforeEach serve para executar antes de cada teste.
//   })

//   it("Validando título principal da página", () => {
//       cy.title().should("be.equal", "Amazon.com.br | Tudo pra você, de A a Z.") 
    
//       cy.get("#nav-link-accountList").click() 
//       cy.get("#createAccountSubmit").click() 
//       cy.get("#ap_customer_name").type("Anonimo Teste") 
//       cy.get("#ap_email").type("93333033333") 
//       cy.get("#ap_password").type("1234falso")
//       cy.get("#ap_password_check").type("1234falso")
//   })
})