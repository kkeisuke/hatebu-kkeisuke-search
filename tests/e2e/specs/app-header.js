// https://docs.cypress.io/api/introduction/api.html

describe('app header viewport check', () => {
  before(() => {
    cy.visit('/')
  })

  it('mobile', () => {
    cy.viewport('iphone-6')

    cy.get('.menuButton').should('be.visible')
    cy.get('.IconLinks').should('not.be.visible')
    cy.get('#Logo').then($els => {
      expect(getPseudoElementStyle($els[0], 'before', 'content')).to.eq('"kkeisuke\'s はてブ検索"')
    })
  })

  it('pc', () => {
    cy.viewport('macbook-13')

    cy.get('.menuButton').should('not.be.visible')
    cy.get('.IconLinks').should('be.visible')
    cy.get('#Logo').then($els => {
      expect(getPseudoElementStyle($els[0], 'before', 'content')).to.eq('"kkeisuke\'s はてなブックマーク検索"')
    })
  })
})

function getPseudoElementStyle(el, pseudoEl, style) {
  return el.ownerDocument.defaultView.getComputedStyle(el, pseudoEl).getPropertyValue(style)
}
