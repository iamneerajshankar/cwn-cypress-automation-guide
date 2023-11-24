/// <reference types="Cypress" />

describe(`Handling different types of scrollbars`, ()=>{

    const BTN_TRY_NOW_XPATH = "//button[normalize-space()='Try it for Free']";
    const HEADER_CONTACT_XPATH = "//h5[normalize-space()='Contact Us']"
    beforeEach(()=>{
        cy.viewport(1920, 1080);
        cy.visit("https://www.orangehrm.com/");
    })

    it(`Browser Scrollbar`, ()=>{

        // This would to specific X-Y Coordinates provided
        cy.scrollTo(0, 500, {timeout:6000})
        cy.wait(10)

        // Target the element and scroll into that view
        cy.xpath(HEADER_CONTACT_XPATH, {timeout:6000}).scrollIntoView()
    })

    it.only(`Using Keyboard Arrows to scroll`, ()=>{

        // Using the downarrow to scroll multiple times
        // for(let i=0; i<20; i++){
        //     cy.get('body', {timeout:6000}).type('{downarrow}')
        // }

        cy.get('body').then(($body) => {
            $body[0].dispatchEvent(new KeyboardEvent('keydown', { keyCode: 40 })); // 40 is the keycode for the down arrow key
          });
          
        
    })
})