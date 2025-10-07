export class AuthModules {
  
    // add signup, login, logout related methods if needed in future

    signup(firstname: string, lastname: string, username: string, password: string) {
        cy.SIGNUP(firstname, lastname, username, password);
    }

    login(username: string, password: string) {
        cy.LOGIN(username, password);
    }

    logout() {
        cy.LOGOUT();
    }

    // end AuthModules class

  }

  