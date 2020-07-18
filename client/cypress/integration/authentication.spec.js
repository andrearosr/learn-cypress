describe('Authentication page', () => {
  it('should be able to log in', () => {
    // Cypress, visita mi página
    cy.visit('http://localhost:3000');

    // Cypress, busca el input de correo y escribe un correo
    cy.get('[data-test=input-email]')
      .type('user@test.com')

    // Cypress, busca el input de contraseña y escribe una clave
    cy.get('[data-test=input-password]')
      .type('secret')

    // Cypress, busca el botón de submit y haz click
    cy.get('[data-test=button]')
      .click()
  });
});