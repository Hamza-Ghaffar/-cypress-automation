Cypress.Commands.add(
  'SIGNUP',
  (firstname: string, lastname: string, username: string, password: string) => {
    cy.visit('/register');

    cy.get('#firstname').type(firstname);
    cy.get('#lastname').type(lastname);
    cy.get('#userName').type(username);
    cy.get('#password').type(password);
    cy.get('#register').click();

    // Just assert UI feedback
    cy.contains('Please verify reCaptcha to register!').should('exist');
  }
);


// framework/commands/index.ts
Cypress.Commands.add('LOGIN', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('#userName').type(username);
  cy.get('#password').type(password);
  cy.get('#login', { timeout: 10000 }).click();
  //cy.url().should('include', '/profile');
  
});


// Custom logout command
Cypress.Commands.add('LOGOUT', () => {
  cy.visit('/profile');
  cy.url().should('include', '/profile');
  cy.get('#books-wrapper > .text-right > #submit', { timeout: 10000 }).click();
  
})


