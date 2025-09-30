import { FormsPage } from '../../modules/page-objects/forms.po';

describe('DemoQA Forms', () => {
  const formsPage = new FormsPage();

  it('should fill and submit the form', () => {
    formsPage.visit();
    formsPage.fillFirstName('Hamza');
    formsPage.fillLastName('Ghaffar');
    formsPage.submit();
    cy.contains('Thanks for submitting').should('be.visible');
  });



  
});
