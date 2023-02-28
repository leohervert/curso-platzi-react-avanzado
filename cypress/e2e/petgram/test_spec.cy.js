/* global describe, it, cy */

describe('Mi primer test', function () {
  it('Comprobar funcionamiento', function () {
    cy.visit('/')
  })

  it('Navegar a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Poder Navegar con Navbar a home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })
})
