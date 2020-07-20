describe('THE HOME PAGE', function () {
    it('visits the home page', function() {
        cy.visit('/')    
    })


    it('has a header', function() {
        cy.get('#header>h1').should('exist')

    })
    it('says "home page"', function () {
        cy.get('#header>h1').should(($h1) =>{
            expect($h1).to.contain('HOMEPAGE')
        })
    })
})