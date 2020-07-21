/// <reference types="Cypress" />

const apiBaseUrl = Cypress.config("apiBaseUrl")

describe('Recover Books from Biblioteca API', () => {

    beforeEach(() => {
        cy.request(`${apiBaseUrl}/Livros`).as('getBooks')
    })

    it('validate header', () => {
        cy.get('@getBooks')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('validate status', () => {
        cy.get('@getBooks')
            .its('status')
            .should('equal', 200)
    })

    it('verify properties of response', () => {
        cy.get('@getBooks')
            .should(response => {
                expect(response.body).to.have.property('items')
                    .to.be.a('array')
                    .to.have.length(10)
                expect(response.body).to.have.property('totalCount')
                    .to.be.a('number')
            })
    })

    it('verify properties of items', () => {
        cy.get('@getBooks')
            .its('body.items')
            .each(item => {
                expect(item).to.have.property('id')
                    .to.be.a('string')
                expect(item).to.have.property('titulo')
                    .to.be.a('string')
                expect(item).to.have.property('isbn')
                    .to.be.a('string')
                expect(item).to.have.property('autor')
                    .to.be.a('string')
                expect(item).to.have.property('editora')
                    .to.be.a('string')
                expect(item).to.have.property('ano')
                    .to.be.a('number')
            })
    })
})
