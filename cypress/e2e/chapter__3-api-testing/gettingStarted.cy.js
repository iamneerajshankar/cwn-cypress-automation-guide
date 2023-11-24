
/// <reference types='Cypress'/>

describe(`Access Token and use the same for Subsuent Request`, () => {
    let accessToken;
    let refreshToken;
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
            accessToken = response.body.access;
            refreshToken = response.body.refresh;
            cy.log(`Access Token: ${accessToken}`);
            cy.log(`Refresh Token: ${refreshToken}`);
            // Log the response body as JSON using JSON.stringify
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));

            console.log("Raw Response", response.body)
        });

    })

    it(`Accessing the Token obtained in the first Test case`, () => {
        cy.log(`Access Token in Second Test: ${accessToken}`)
        cy.log(`Refresh Token in Second Test: ${refreshToken}`)
    })
})