// https://docs.cypress.io/api/introduction/api.html

describe('search', () => {
  before(() => {
    cy.visit('/')
  })

  it('input freeword and search', () => {
    const freeword = 'vue'

    cy.get('#searchBox').type(freeword)
    cy.get('#HatebuSearchForm').submit()
    cy.get('.HatebuSearchListItem').first().contains(freeword)
  })
})
