// We called class methoad and that class method used cypress commands
// So we need to define those commands first

//Import authModules class
import { AuthModules } from '../../modules/authModules';


describe('END to End Auth Flow', () => {
  const auth = new AuthModules();

  
  /*
   it('should sign up a new user', () => {
    auth.signup('hamza', 'ghaffar', 'hamzaghaffar', 'Password123!');
  });
   */
  

  it('should log in and log out the user', () => {
  auth.login('hamza', 'QkwnE!W8JS2hMEh');
  auth.logout();
});

});

