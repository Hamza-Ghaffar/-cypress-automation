// ✅ tests/e2e/checkBox.spec.ts
import { CheckBoxModule } from '../../modules/checkBoxModule';

describe('Check Box Feature Tests - DemoQA', () => {
 
  const checkBox = new CheckBoxModule();

  beforeEach(() => {
    // Ensure user logged in before each tes
    checkBox.visit();
  });

  it('should expand Home node and select Desktop -> Notes checkbox', () => {
    checkBox.expandHomeNode();
    checkBox.expandNode('Desktop');
    checkBox.checkBox('Notes');
    checkBox.assertOutputContains('Notes');
  });

  it('should check multiple nested boxes and validate output', () => {
    checkBox.expandHomeNode();
    checkBox.expandNode('Documents');
    checkBox.checkBox('Office');
    checkBox.checkBox('WorkSpace');
    checkBox.assertOutputContains('Office');
    checkBox.assertOutputContains('WorkSpace');
  });

  it('should uncheck a box and validate output removed', () => {
    checkBox.expandHomeNode();
    checkBox.expandNode('Desktop');
    checkBox.checkBox('Notes');
    checkBox.assertOutputContains('Notes');
    checkBox.uncheckBox('Notes');
    checkBox.assertOutputDoesNotContain('Notes');
  });
});
