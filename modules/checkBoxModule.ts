// ✅ modules/checkBoxModule.ts
// Combined Module for CheckBox feature (handles expand, select, unselect, and assertions)

export class CheckBoxModule {

  // Visit the Check Box page
  visit() {
    cy.visit('/checkbox');
  }

  // Expand the main "Home" node to reveal children
  expandHomeNode() {
    cy.get('.rct-node-expanded, .rct-node-collapsed')
      .first()
      .find('.rct-collapse, .rct-collapse-btn')
      .click({ force: true });
  }

  // Expand any node by label (Documents, Desktop, etc.)
  expandNode(label: string) {
    cy.contains('.rct-node', label)
      .find('.rct-collapse, .rct-collapse-btn')
      .click({ force: true });
  }

  // Check a box by its label text (e.g. "Notes", "Office", "Word File.doc")
  checkBox(label: string) {
    cy.contains('.rct-node', new RegExp(`^${label}$`, 'i'))
      .scrollIntoView()
      .find('.rct-checkbox')
      .click({ force: true });
  }

  // Uncheck a box by label — with safety checks
  uncheckBox(label: string) {
    cy.get('.rct-node').should('be.visible');
    cy.wait(500); // small render delay
    cy.contains('.rct-node', new RegExp(`^${label}$`, 'i'))
      .scrollIntoView()
      .find('.rct-checkbox')
      .click({ force: true });
  }

  // ✅ Assertion helpers
  assertOutputContains(label: string) {
    cy.get('#result').should('contain.text', label.toLowerCase());
  }

  assertOutputDoesNotContain(label: string) {
    cy.get('#result').should('not.contain.text', label.toLowerCase());
  }
}
