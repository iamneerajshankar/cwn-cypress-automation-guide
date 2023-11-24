// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Enable auto Suggestions
/// <reference types="Cypress"/>


require('cypress-xpath');
// Reusable component to handle the iframe
Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe).its('0.contentDocument.body')
    .should('be.visible').then(cy.wrap)

})

Cypress.on('uncaught:exception', (err, runnable)=>{

    console.error(`Uncaught Exception --> ${err}`);
    return false; // Return false to prevent the default behavior of Cypress
})