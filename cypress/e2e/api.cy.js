

describe('Learn REST API Testing with Cypress', () => {
  it('passes', () => {
    cy.request('/users/2').then((response) => {
      cy.log(JSON.stringify(response.body.data.email))
      cy.log(JSON.stringify(response.headers.headers))

  })
})

  it('API Tests - Validate Headers', () => {
    cy.request('/users/2').as('user') 
    cy.get('@user')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')

    cy.get('@user').its('headers').its('connection').should('include', 'keep-alive')

  })


})