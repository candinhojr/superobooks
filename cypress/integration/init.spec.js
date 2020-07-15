describe('Cypress init', () => {

    it('is working', () => {
        expect(true).to.equal(true)
    }),

        it('visits the app homepage', () => {
            cy.visit('/')
        })
})