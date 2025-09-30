export class FormsPage {
  visit() {
    cy.visit('/automation-practice-form');
  }

  fillFirstName(name: string) {
    cy.get('#firstName').type(name);
  }

  fillLastName(name: string) {
    cy.get('#lastName').type(name);
  }

  submit() {
    cy.get('#submit').click();
  }
}


