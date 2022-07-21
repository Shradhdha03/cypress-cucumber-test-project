import { Given, When, Then, And  } from "@badeball/cypress-cucumber-preprocessor";

Given('I go to {string}', url => {
    cy.visit(url);
});

When('I search for {string}', keyword => {
    cy.get('input[name=q]').type(keyword + '{enter}');
});

Then('I can see {string}', search_result => {
    cy.get('#search a').invoke('attr', 'href').then((href) => {
        expect(href).to.eq(search_result);
    })
});
