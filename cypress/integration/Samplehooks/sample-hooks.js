/// <reference types="Cypress" />
describe('Sample hooks - Test Suite', function (){
    beforeEach(function(){
        cy.log('before Each Test case')
    })

    it('Sample test case 1', function (){
        cy.log('Inside my test case 1')
    })

    
    it('Sample test case 2', function (){
        cy.log('Inside my test case 2')
    })

    it('Sample test case 3', function (){
        cy.log('Inside my test case 3')
    })

    afterEach(function(){
        cy.log('After Each test case')
    })
})