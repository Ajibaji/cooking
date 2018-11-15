// const User = require('../../lib/model/user');
const Recipe = require('../../lib/model/recipe');
const dbSetup = require('../helpers/dbSetupScripts');
const request = require('supertest');
const app = require('../../app');

function makeJSONGetRequest(url, expectedCode, expectedData, done) {
	request(app)
		.get(url)
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(expectedCode, done);
}

describe('Documents Tests', function() {

	beforeEach(function(done) {
		dbSetup.addTestData();
		done();
	});
	afterEach(function(done) {
		dbSetup.clearTestData();
		done();
	});

	let testRecipeName = 'testRecipe';

	let testRecipe = new Recipe(testRecipeName);

	let expectedData;

	it('GET \'/documentlist\' should return json with entries', function(done) {
		makeJSONGetRequest('/documents/documentlist', 200, expectedData, done);
	});

	it('GET \'/documentlist/:query\' should return json with saved entry', function(done) {
		makeJSONGetRequest('/documents/documentlist/bread', 200, expectedData, done);
	});

	it('POST \'/adddocument\' should return correct json with valid document', function(done) {
		request(app)
			.post('/documents/adddocument')
			.send(testRecipe)
			.set('Accept', 'application/json')
			.expect(200)
			.end((err) => {
				if(err) return done(err);
				done();
			});
	});

	it('DELETE \'/deletedocument/:id\' should return correct json with valid document id', function(done) {
		request(app)
			.delete('/documents/deletedocument/5bec4b21d78d282e16f87415')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err) => {
				if(err) return done(err);
				done();
			});
	});

	it('GET \'/recipesearch/:query\' should return correct json with valid query', function(done) {
		makeJSONGetRequest('/documents/recipesearch/bread', 200, expectedData, done);
	});
});
