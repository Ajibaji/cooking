// context('Serarch Actions', function() {

// 	// test variables
// 	const singleItemSearch = 'bread';
// 	const doubleItemSearch = 'bread, eggs';

// 	beforeEach(function() {
// 		cy.visit('/');
// 	});

// 	function simpleSearch(item) {
// 		cy.get('#inputSearchQuery').type(item);
// 		cy.get('#btnSearch').click();
// 	}

// 	it('can search for a single item and see a list of recipes', function() {
// 		simpleSearch(singleItemSearch);
// 		cy.get('#results').contains('Bread');
// 	});

// 	it('can search for multiple recipies and see a list of items', function() {
// 		simpleSearch(doubleItemSearch);
// 		cy.get('#results').contains('Eggs');
// 	});
// });