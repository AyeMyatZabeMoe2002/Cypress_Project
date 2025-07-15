# Cypress_Project
CypressProject_Description

Project Title         : Cypress Login Form Automation Testing 

Test File             : login.cy.js under e2e 

Page Object File      : LoginPage.js under cypress/pages/

Valid Username        : standard_user, secret_sauce 

Invalid Username      : standard, 123 


How to run this code 

Firstly, you open terminal (Command Prompt) and run this commands

npm init -y (install node modeule) 

npm install cypress --save-dev (install cypress) 

npx cypress open (open cypress) 

npx cypress run  


I use cypress for login form automation. Firslty, you need node.js file in your laptop. After installing and downloading node.js file, you run this commands node -v and npm -v.

And then, you create new folder about testing. And then, you setup nodemodule file (npm init -y) in this folder. After setup, you also setup cypress commands "npm install cypress --save-dev, npx cypress open, npx cypress run". 

The main test file, I use main test function to recall and in page object file, I delcare elements and build objects for input data and export data method. Clear to see code, I use POM design pattern. Finally you want to code file to run, 

Run this command "npx cypress open, npx cypress run". You can check how to test that pass or fail in this terminal, also check UI working pattern on google chrome.  




