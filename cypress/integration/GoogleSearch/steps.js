import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I go to {string}', url => {
    cy.visit(url);
});

When('I search for {string}', keyword => {
    cy.get('input[name=q]').type(keyword + '{enter}');
});

Then('I can see {string}', keyword => {
    cy.get('#search a').invoke('attr', 'href').then((href) => {
        console.log(href);
    })
});
