import "cypress-iframe";
/// <reference types='Cypress' />

const FRAME_XPATH = "//iframe[@id='mce_0_ifr']"
const FRAME_CSS = "#mce_0_ifr"
const INPUT_CONTENT_CSS = "#tinymce"

describe(`Different ways of handling iframe`, ()=>{

    it(`The first ways`, ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");

        // Understanding 0.contentDocument.body
        // 0 --> often used as short hand for the first iframe on the page
        // contentDocument --> Property if an iframe which provide access to the document (The HTML content)
        // body --> This refers to the <body> element within the document.
        const iframe = cy.get(FRAME_CSS).its('0.contentDocument.body')
        .should('be.visible').then(cy.wrap)

        iframe.clear().type("This text is being entered inside frame");

    })

    it(`Using the reuable component`, ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        cy.getIframe(FRAME_CSS).clear().type("This text is being entered inside frame")
    })

    it(`Using the cypress iframe plugin`, ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        cy.frameLoaded(FRAME_CSS); // Loads the iframe

        cy.iframe("#mce_0_ifr").clear().type("This text is being entered inside frame");
    })


    it(`Using the enter option available in frame plugin`, ()=>{

        cy.enter(FRAME_CSS).then(getBody => {
            cy.visit("https://the-internet.herokuapp.com/tinymce");
            getBody().find(INPUT_CONTENT_CSS, {timeout:6000}).clear().type("This text is being entered inside frame")
        })
    })

    it(`Using the jquery to access the iframe elements`, ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        cy.get(FRAME_CSS, {timeout:6000}).then($iframe => {

           const $iframeContent =  $iframe.contents();
           cy.wrap($iframeContent).find(INPUT_CONTENT_CSS).clear().type("This text is being entered inside frame")
        })
    })


})