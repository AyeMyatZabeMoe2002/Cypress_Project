class LoginPage{
    elements = {
        usernameInput   : ()=>cy.get("#user-name"),
        passwordInput   : ()=>cy.get("#password"),
        loginbutton     : ()=>cy.get("#login-button"),
        headerName      : ()=>cy.get(".app_logo"),
        errorMessage    : ()=>cy.get('h3[data-test="error"]'),
        username_requiremessage : ()=>cy.get('h3[data-test="error"]'),
        password_requiremessage : ()=>cy.get('h3[data-test="error"]')
    }

    messages = {
        headerName : "Swag Labs",
    }

    error = {
        errorMessage : "Epic sadface: Username and password do not match any user in this service",
    }

    requiremessage ={
        username_requiremessage : "Epic sadface: Username and password do not match any user in this service",
        password_requiremessage : "Epic sadface: Username and password do not match any user in this service",
    }


    openBrowser(){
        cy.visit('https://www.saucedemo.com/'); 
        cy.wait(2000);
        return this; 
    }

    loginWithValidCredentials(){
        this.elements.usernameInput().type('standard_user');
        this.elements.passwordInput().type('secret_sauce');
        // this.elements.usernameInput().type(usernameInput);
        // this.elements.passwordInput().type(passwordInput);
        this.elements.loginbutton().click();
        return this; 
    }

    loginWithInvalidUsername(){
        this.elements.usernameInput().clear().type('standard');
        this.elements.passwordInput().clear().type('secret_sauce');
        this.elements.loginbutton().click();
        return this;
    }

    loginWithInvalidPassword(){
        this.elements.usernameInput().clear().type('standard_user');
        this.elements.passwordInput().clear().type('123');
        this.elements.loginbutton().click();
        return this;
    }
    // loginWithValidUsernameandInvalidPassword(){
    //     this.elements.usernameInput().clear().type('standard_user');
    //     this.elements.passwordInput().clear().type('123');
    //     this.elements.loginbutton().click(); 
    //     return this; 
    // }

}
export default LoginPage;