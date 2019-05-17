describe('App test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should be 9 squares', () => {
        cy.get('.square').should('have.length', 9);
    });

    it('squares are all empty', () => {
        cy.get('.square').each((element, index, collection) => {
            cy.wrap(element).should('have.value', '');
        });
    });

    it('default game info message prompts player X', () => {
        cy.get('.game-info > div').should($div => {
            expect($div).to.have.text(' Next player: X ');
        });
    });

    it('default sort order button says descending', () => {
        cy.get('.game-info > button').should($but => {
            expect($but).to.have.text('Sort Descending');
        });
    });

    it('after click, sort order button says ascending', () => {
        cy.get('.game-info > button').click();
        cy.get('.game-info > button').should($but => {
            expect($but).to.have.text('Sort Ascending');
        });
    });

    it('default player prompt indicates Player X', () => {
        cy.get('.game-info > div').should($div => {
            expect($div).to.have.text(' Next player: X ');
        });
    });

    it('X is odd-turn player', () => {
        cy.get('.square').first().click();
        cy.get('.square').first().should($sq => {
            expect($sq).to.have.text('X');
        });
    });

    it('O is even-turn player', () => {
        cy.get('.square').eq(0).click(); // X
        cy.get('.square').eq(1).click(); // O
        cy.get('.square').eq(1).should($sq => {
            expect($sq).to.have.text('O');
        });
    });

    it('Game info indicates draw appropriately', () => {
        cy.get('.square').eq(0).click(); // X
        cy.get('.square').eq(8).click(); // O
        cy.get('.square').eq(1).click(); // X
        cy.get('.square').eq(7).click(); // O
        cy.get('.square').eq(6).click(); // X
        cy.get('.square').eq(2).click(); // O
        cy.get('.square').eq(5).click(); // X
        cy.get('.square').eq(3).click(); // O
        cy.get('.square').eq(4).click(); // X
        cy.get('.game-info > div').should($div => {
            expect($div).to.have.text(' Game ends in a draw, better luck next time! ');
        });
    });

    it('Game info correctly names winner', () => {
        cy.get('.square').eq(0).click(); // X
        cy.get('.square').eq(8).click(); // O
        cy.get('.square').eq(1).click(); // X
        cy.get('.square').eq(7).click(); // O
        cy.get('.square').eq(2).click(); // X

        cy.get('.game-info > div').should($div => {
            expect($div).to.have.text(' Winner: X ');
        });
    });

    it('Game highlights winning combo (and no additional squares)', () => {
        cy.get('.square').eq(0).click(); // X
        cy.get('.square').eq(8).click(); // O
        cy.get('.square').eq(1).click(); // X
        cy.get('.square').eq(7).click(); // O
        cy.get('.square').eq(2).click(); // X

        cy.get('.square').eq(0).should('have.css', 'background-color', 'rgb(238, 238, 238)'); // winning square
        cy.get('.square').eq(1).should('have.css', 'background-color', 'rgb(238, 238, 238)'); // winning square
        cy.get('.square').eq(2).should('have.css', 'background-color', 'rgb(238, 238, 238)'); // winning square
        cy.get('.square').eq(3).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.square').eq(4).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.square').eq(5).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.square').eq(6).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.square').eq(7).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.square').eq(8).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });

    it('Game allows no additional clicks once winner has been named', () => {
        cy.get('.square').eq(0).click(); // X
        cy.get('.square').eq(8).click(); // O
        cy.get('.square').eq(1).click(); // X
        cy.get('.square').eq(7).click(); // O
        cy.get('.square').eq(2).click(); // X
        cy.get('.square').eq(3).click(); // post-win click

        cy.get('.square').eq(3).should($sq => {
            expect($sq).to.have.text('');
        });
    });

    // and so many more tests...

});
