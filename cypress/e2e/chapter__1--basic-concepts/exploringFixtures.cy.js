
/// <reference types='Cypress'/>

describe(`Accessing Data from Fixtures`, () => {
    let accessToken;
    let refreshToken
    before(() => {

        cy.fixture('credentials.json').then(credentials => {
            Cypress.env('credentials', credentials);
        });


    })

    it(`Obtain The Token for Authetication`, () => {
        const credentials = Cypress.env('credentials')
        cy.log(`Fetched Credentials: ${credentials}`);
        cy.log(`Fetched Credentials: ${credentials.username}`);
        cy.log(`Fetched Credentials: ${credentials.password}`);
        const URL = "http://127.0.0.1:8000/user-management/token/"
        cy.request({
            method: "POST",
            url: URL,
            headers: {
                'Content-Type': 'application/json', 
            },
            body: {
                'username': credentials.username,
                'password': credentials.password
            }

        }).then(response => {
            // Handle the response as needed
            expect(response.status).to.be.oneOf([200, 201, 204]);
            // access the token received 
            accessToken = response.body.token;
            refreshToken = response.body.refresh;
            cy.log(`Access Token: ${accessToken}`);
            cy.log(`Refresh Token: ${accessToken}`);
          });

    })
})