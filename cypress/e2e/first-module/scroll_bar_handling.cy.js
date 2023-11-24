
/// <reference types='Cypress'/>

describe(`Accessing Data from Fixtures`, () => {

    before(() => {

        cy.fixture('credentials.json').then(credentials => {
            Cypress.env('credentials', credentials);
        });


    })

    it(`Obtain The Token for Authetication`, () => {
        const credentials = Cypress.env('credentials')
        cy.log(`Fetched Credentials: ${credentials}`);

    })
})