// Instead of using Cypress.Commands.add separately, we wrap everything in class

export class textBoxModule {
  
  // Raw command-like method
  fillTextBox(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    cy.visit('/text-box');
    cy.get('#userName').clear().type(fullName);
    cy.get('#userEmail').clear().type(email);
    cy.get('#currentAddress').clear().type(currentAddress);
    cy.get('#permanentAddress').clear().type(permanentAddress);
    cy.get('#submit').click();
  }

  // Optional: Add assertion helpers inside same module
  assertTextBoxOutput(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    cy.get('#output #name').should('contain.text', fullName);
    cy.get('#output #email').should('contain.text', email);
    cy.get('#output #currentAddress').should('contain.text', currentAddress);
    cy.get('#output #permanentAddress').should('contain.text', permanentAddress);
  }
}
