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
      const win = $els[0].ownerDocument.defaultView
      const before = win.getComputedStyle($els[0], 'before')
      const contentValue = before.getPropertyValue('content')
      expect(contentValue).to.eq('"kkeisuke\'s はてなブ検索"')
    })
  })

  it('pc', () => {
    cy.viewport('macbook-13')

    cy.get('.menuButton').should('not.be.visible')
    cy.get('.IconLinks').should('be.visible')
    cy.get('#Logo').then($els => {
      const win = $els[0].ownerDocument.defaultView
      const before = win.getComputedStyle($els[0], 'before')
      const contentValue = before.getPropertyValue('content')
      expect(contentValue).to.eq('"kkeisuke\'s はてなブックマーク検索"')
    })
  })
})
