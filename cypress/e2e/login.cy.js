import LoginPage from "../POM/pages/LoginPage"

const login = new LoginPage();

 describe('First Time Automation Testing', ()=> {
      beforeEach(() => {
        cy.visit("https://www.saucedemo.com/.");
      })
      
      it('Successfully login with cerdentials', ()=>{
       login.loginWithValidCredentials()
       login.elements.headerName()
        .should('be.visible')
        .and('have.text', login.messages.headerName)
      })

      it('Username is invalid & password is valid', ()=>{
        login.loginWithInvalidUsername()
        login.elements.username_requiremessage()
        .should('be.visible')
        .and('contain',login.requiremessage.username_requiremessage)
      })

      it('Username is valid & password is invalid', ()=>{
        login.loginWithInvalidPassword()
        login.elements.password_requiremessage()
        .should('be.visible')
        .and('contain',login.requiremessage.password_requiremessage)
      })

      


})