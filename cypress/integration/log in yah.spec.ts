describe('log in to trade me', () => {
  it('fails with random credentials', () => {
    cy.visit(`https://www.trademe.co.nz/Members/Login.aspx`);

    cy.get('#page_email').type('blabla@dirtchaser.co.nz');

    cy.get('#page_password').type('hungover');

    cy.get('#LoginPageButton').click();

    cy.url().should('contain', '/Members/Login.aspx');
  });
});
