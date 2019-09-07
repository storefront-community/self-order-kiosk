describe('Start page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Are you hungry?')
  })
})
