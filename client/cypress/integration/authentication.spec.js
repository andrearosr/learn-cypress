describe('Authentication tests', () => {
  beforeEach(() => {
    // Cypress, visita mi página
    cy.visit('http://localhost:3000')
  })

  it('should allow log in', () => {
    // Cypress, busca el input del correo y escribe un correo
    cy.get('[data-test=input-email]')
      .type('user@test.com')

    // Cypress, busca el input del password y escribe una clave
    cy.get('[data-test=input-password]')
      .type('1234')

    // Cypress, buscar el botón y darle click
    cy.get('[data-test=login-button]')
      .click()

    // Validar el url cambió a /jobs
    cy.location('pathname')
      .should('be', '/jobs')

    // Existe un título con el texto 'Jobs'
    cy.get('[data-test=jobs-title]')
      .contains('Jobs')
  })

  it('should allow log out', () => {
    cy.login()

    cy.get('[data-test=logout-button]')
      .click()

    // Validar el url cambió a /
    cy.location('pathname')
      .should('be', '/')
  })
})