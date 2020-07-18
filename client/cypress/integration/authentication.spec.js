describe('Authentication page', () => {
  beforeEach(() => {
    // Cypress, visita mi página
    cy.visit('http://localhost:3000');
  });

  it('should be able to log in', () => {
    // Cypress, busca el input de correo y escribe un correo
    cy.get('[data-test=input-email]')
      .type('user@test.com')

    // Cypress, busca el input de contraseña y escribe una clave
    cy.get('[data-test=input-password]')
      .type('secret')

    // Cypress, busca el botón de submit y haz click
    cy.get('[data-test=login-button]')
      .click()

    // Validar que la ruta cambió a /jobs
    cy.location('pathname')
      .should('be', '/jobs')

    // Validar que existe un título 'Jobs'
    cy.get('[data-test=jobs-title]')
      .contains('Jobs')
  });

  it('should be able to log out', () => {
    cy.login();

    // Cypress, busca el botón de logout y haz click
    cy.get('[data-test=logout-button]')
      .click()

    // Validar que la ruta cambió a /
    cy.location('pathname')
      .should('be', '/')

    // Validar que existe un título 'Login'
    cy.get('[data-test=login-title]')
      .contains('Log In')
  });
});