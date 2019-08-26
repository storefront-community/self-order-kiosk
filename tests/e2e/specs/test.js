describe('Start page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Make your order here')
  })
})
