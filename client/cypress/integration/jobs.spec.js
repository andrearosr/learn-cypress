describe('Jobs page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.server();
    cy.route('GET', '/jobs').as('jobs');
  });

  it('should list jobs', () => {
    cy.login();

    cy.wait('@jobs')
  });
});