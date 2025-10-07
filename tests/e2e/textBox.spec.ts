import { textBoxModule } from '../../modules/textBoxModule';

describe('Text Box Feature Tests', () => {
  
  const textBox = new textBoxModule();

  it('should fill and validate text box form', () => {
    textBox.fillTextBox(
      'Hamza Ghaffar',
      'hamza@example.com',
      'Current Address Demo',
      'Permanent Address Demo'
    );

    // Reuse module assertions
    textBox.assertTextBoxOutput(
      'Hamza Ghaffar',
      'hamza@example.com',
      'Current Address Demo',
      'Permanent Address Demo'
    );
  });
});