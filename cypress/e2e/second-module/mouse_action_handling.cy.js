/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

/**
 * This test suite includes common mouse actions:
 * 1. mover-hover: The placing of mouse cursor over a given element
 * 2. right-click: 
 */

describe(`Handling different mouse actions`, ()=>{

    beforeEach(()=>{

        // visiting the base url of the testing site
        cy.viewport(1920, 1080);
        cy.visit("https://demo.opencart.com/"); 
        cy.wait(10000);
    })


    it(`Testing Mouse hover action`, ()=>{

        const LINK_RESOURCE_MENU_XPATH = "//a[normalize-space()='Laptops & Notebooks']";
        const LINK_SUB_MENU_XPATH = "//a[normalize-space()='Macs (0)']";
        const HEADER_EBOOK_XPATH = "//h2[normalize-space()='Macs']";

        cy.xpath(LINK_RESOURCE_MENU_XPATH, {timeout:6000}).trigger('mouseover');
        cy.xpath(LINK_SUB_MENU_XPATH, {timeout:6000}).click();
        cy.xpath(HEADER_EBOOK_XPATH, {timeout:6000}).should('have.text', "Macs");
        cy.log(`The test completed successfully..!!!`)
        
    })
})