
    it ("Testing Forms", function() {
    cy.visit('http://localhost:3000/');

    cy.contains('Pizza?').click();

    cy.get('.name').type('Lakendria').should('have.value', 'Lakendria');

    cy.get('.pepperoni').click();

    cy.get('.beef').click();

    cy.get("#instructions").type("Can you cut in squares?").should("have.value", "Can you cut in squares?")

    cy.contains('Submit Order').click();
}) 