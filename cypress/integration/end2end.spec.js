describe( 'User visit the website', () =>
{
    beforeEach( () =>
    {
        cy.visit( '/' )
    } )

    it( 'Home Page Loaded', () =>
    {
        //Header Loaded
        cy.findByRole( 'heading', {
            name: /hello holiday/i
        } ).should( 'exist' )
        cy.findByRole( 'navigation' ).find( 'li' ).should( 'have.length', 5 )
        cy.findByRole( 'link', { name: /home/i } ).should( 'exist' )

        //Video Loaded
        cy.get( 'video' ).should( 'exist' )

        //Video Text and Button Loaded
        cy.findByRole( 'heading', { name: /enjoy summer holidays/i } ).should( 'exist' )
        cy.findByRole( 'link', { name: /explore/i } ).should( 'exist' )

        //Explore Nearby Loaded
        cy.findByRole( 'img', { name: /wellington/i } ).should( 'exist' )

        //Discover Banner Text and Button Loaded
        cy.findByRole( 'heading', { name: /discover valuable tourings/i } ).should( 'exist' )
        cy.findByRole( 'link', { name: /discover/i } ).should( 'exist' )

        //Footer Loaded
        cy.get( 'footer' ).should( 'exist' )
        cy.findByRole( 'link', { name: /about us/i } ).should( 'exist' )
    } )
} )