describe('Coming soon', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Storefront Community')
    cy.contains('p', 'Working to innovate the food retail experience')
  })
})
