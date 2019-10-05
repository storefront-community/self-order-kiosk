describe('Start page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('button', 'Make your order')
  })
})
