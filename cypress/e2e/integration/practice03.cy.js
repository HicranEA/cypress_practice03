// <reference types="cypress"/>

describe('Practice03 - Validate WikiPedia Web Page ', () => {

    beforeEach(() => { 
      cy.visit('https://www.wikipedia.org/')        
  
    })
  
    it('TASK-1: Validate the Wikipedia Logo and Slogan', () => {
      
      cy.get('.central-textlogo').should('be.visible')
        .and('contain','Wikipedia')
        .and('contain','The Free Encyclopedia' )
           
    })
  
        
    it('TASK-2: Validate the Wikipedia Top Ten Languages', () => {
      
      cy.get('.central-featured').should('be.visible')
      cy.get('.central-featured').children().eq(0).should('contain', 'English')
              
    })
  
    it('TASK-3: Validate the Wikipedia Search Results', () => {
  
      cy.get('#searchInput').type('Cypress{enter}')
      cy.title().should('include', 'Cypress')
      cy.url().should('include', 'Cypress')
      cy.get('#firstHeading').should('have.text', 'Cypress')
     
    })
  
    it('TASK-4:  Validate the Wikipedia Article Numbers for All Languages', () => {
  
      cy.get('.lang-list-button-text').eq(0).click()
  
      const languages = [18, 53, 99, 126, 29]
  
      for(let i = 0; i < languages.length; i++){
  
        cy.get('.hlist').eq(i).find('a').should('have.length',languages[i])
      }
  
    })
  
  })