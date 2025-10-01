// Import your command modules here
import './commands/authFlow';


// Extend Cypress' Chainable interface to include the custom 'LOGIN' command


declare global {
  namespace Cypress {
    interface Chainable {
      LOGIN(username: string, password: string): Chainable<void>;
      SIGNUP(firstname: string, lastname: string, username: string, password: string): Chainable<void>;
      LOGOUT(): Chainable<void>;
    }
  }
}

// Ignore uncaught exceptions from cross-origin scripts
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false
})