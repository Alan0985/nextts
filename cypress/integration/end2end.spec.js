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
        cy.findByRole( 'link', { name: /explore/i } ).click()
        cy.location( 'pathname' ).should( 'include', 'guides' )
        cy.wait( 1000 )
        cy.go( -1 )

        //Explore Nearby Loaded
        cy.findByRole( 'img', { name: /wellington/i } ).should( 'exist' )

        //Discover Banner Text and Button Loaded
        cy.findByRole( 'heading', { name: /discover valuable tourings/i } ).should( 'exist' )
        cy.findByRole( 'link', { name: /discover/i } ).should( 'exist' )
        cy.findByRole( 'link', { name: /discover/i } ).click()
        cy.location( 'pathname' ).should( 'include', 'touring' )
        cy.wait( 1000 )
        cy.go( -1 )

        //Footer Loaded
        cy.get( 'footer' ).should( 'exist' )
        cy.findByRole( 'link', { name: /about us/i } ).should( 'exist' )
        cy.findByRole( 'link', { name: /about us/i } ).click()
        cy.location( 'pathname' ).should( 'include', 'about' )
        cy.wait( 1000 )
        cy.go( -1 )

        cy.get( 'footer' ).within( () =>
        {
            cy.get( 'svg' ).should( 'exist' )
            cy.get( 'svg' ).first().parent().should( 'have.attr', 'href', 'https://twitter.com' )
        } )
    } )

    it( 'User goes to About Page', () =>
    {
        cy.get( '[data-test=about]' ).click()
        cy.findByRole( 'heading', { name: /about hello holiday/i } ).should( 'exist' )
    } )

    it( 'User goes to Travel Guides Page', () =>
    {
        cy.findByRole( 'link', { name: /travel guides/i } ).click()
        cy.findByRole( 'heading', { name: /travel guides/i } ).should( 'exist' )
        cy.findByRole( 'heading', { name: /hobbiton movie set/i } ).should( 'exist' )
    } )

    it( 'User goes to Touring Page', () =>
    {
        cy.findByRole( 'link', { name: /touring/i } ).click()
        cy.findByRole( 'heading', { name: /lord of the ring movie set 14 days tour/i } ).should( 'exist' )
        cy.get( '[data-test=tourDuration]' ).contains( "Duration" )
        cy.get( '[data-test=tourRating]' ).contains( "Rating" )
        cy.findByRole( 'img', { name: /luxury charter yacht 3 days tour/i } ).should( 'exist' )
    } )

    it( 'User goes to Contact Page', () =>
    {
        cy.get( '[data-test=contact]' ).click()
        cy.findByText( /email:/i ).should( 'exist' )

        let name = 'John'
        cy.findByPlaceholderText( /name/i ).should( 'exist' )
        cy.findByPlaceholderText( /name/i ).type( name ).should( 'have.value', name )

        let email = 'john@doe.co.nz'
        cy.findByPlaceholderText( /name/i ).should( 'exist' )
        cy.findByPlaceholderText( /email address/i ).type( email ).should( 'have.value', email )

        let message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, illo'
        cy.get( 'textarea' ).should( 'exist' )
        cy.get( 'textarea' ).type( message ).should( 'have.value', message )

        cy.findByRole( 'button', { name: /submit/i } ).should( 'exist' )
        cy.on( 'window:alert', ( text ) =>
        {
            expect( text ).to.contains( 'Thanks for your message, we will get back to you soon.' )
        } )
    } )
} )