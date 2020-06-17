// https://docs.cypress.io/api/introduction/api.html

describe('search', () => {
  before(() => {
    cy.visit('/')
  })

  Cypress.Commands.add('search', freeword => {
    cy.get('#searchBox')
      .clear()
      .type(`${freeword}{enter}`)
  })

  it('input freeword and search', () => {
    const freeword = 'vue'
    const regexp = new RegExp(freeword, 'i')

    cy.search(freeword)
    cy.get('.HatebuSearchListItem')
      .first()
      .contains(regexp)
    cy.get('.HatebuSearchEmptyResult').should('have.length', 0)
  })

  it('input empty freeword and search', () => {
    const freeword = '　'

    cy.search(freeword)
    cy.get('.HatebuSearchListItem').should('have.length', 0)
    cy.get('.HatebuSearchEmptyResult').should('have.length', 1)
  })
})
