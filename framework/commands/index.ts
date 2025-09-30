Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('#userName').type(username);
  cy.get('#password').type(password);
  cy.get('#login').click();
});



