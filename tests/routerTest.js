const User = require('../lib/model/user');
const Recipe = require('../lib/model/recipe');
const dbSetup = require('./helpers/dbSetupScripts');
const request = require('supertest');
const app = require('../app');
const monk = require('monk');


describe('Router tests', function() {


	beforeEach(function() {
		dbSetup.addTestData();
	});

	afterEach(function() {
		dbSetup.clearTestData();
	});

	function makeGetRequest(url, expectedCode, done) {
		request(app)
			.get(url)
			.set('Accept', 'application/json')
			.expect('Content-Type', /html/)
			.expect(expectedCode, done);
	}

	function makePostRequest(url, expectedCode, data, done) {
		request(app)
			.post(url)
			.send(data)
			.set('Accept', 'application/json')
			.expect(expectedCode)
			.end((err) => {
				if(err) return done(err);
				done();
			});
	}

	function makeJSONGetRequest(url, expectedCode, expectedData, done) {
		request(app)
			.get(url)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(expectedCode, done);
	}

	describe('Post request Tests', function() {

		// login
		
		it('\'/login\' with valid params should return 200', function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'testPassword1'
			};
			makePostRequest('/login', 200, data, done);
		});

		it('\'/login\' with invalid params should return 418', function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'fakepassword'
			};
			makePostRequest('/login', 418, data, done);
		});

		// register

		it('\'/register\' with valid params should return 200', function(done) {
			let data = {
				'username': 'newUser1',
				'password': 'testPassword1',
				'firstName': 'testFirstName',
				'lastName': 'testLastname'
			};
			makePostRequest('/login', 200, data, done);
		});

		it('\'/register\' with invalid params should return 418', function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'testPassword1',
				'firstName': 'testFirstName',
				'lastName': 'testLastname'
			};
			makePostRequest('/login', 418, data, done);
		});

	});


	describe('Documents Tests', function() {

		// beforeEach(function() {
		// 	dbSetup.addTestData();
		// });
	
		// afterEach(function() {
		// 	dbSetup.clearTestData();
		// });
	
		let testUsername = 'testUsername';
		let testRecipeName = 'testRecipe';
	
		let testUser = new User(testUsername);
		let testRecipe = new Recipe(testRecipeName);

		let expectedData;
	
		it('GET \'/documentlist\' should return json with entries', function(done) {
			makeJSONGetRequest('/documents/documentlist', 200, expectedData, done);
		});

		it('GET \'/document/:query\' should return json with saved entry', function(done) {
			makeJSONGetRequest('/documents/document/bread', 200, expectedData, done);
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
			const db = monk('localhost:27017/sg');
			let recipes = db.get('recipes');
			recipes.findOne({name: 'testRecipe1'})
				.then((doc) => {
					request(app)
						.delete(`/deletedocument/${doc._id}`)
						.set('Accept', 'application/json')
						.expect('Content-Type', /json/)
						.expect(200)
						.end((err) => {
							if(err) return done(err);
							done();
						});
				}).then(() => db.close());
		});

		it('GET \'/recipesearch/:query\' should return correct json with valid query', function(done) {
			makeJSONGetRequest('/documents/recipesearch/bread', 200, expectedData, done);
		});
	});
	
	describe('Get request Tests', function() {

		it(' \'/\' should return status of 200', function(done) {
			makeGetRequest('/', 200, done);
		});

		it('\'/recipestore\' should return status of 200', function(done) {
			makeGetRequest('/recipestore', 200, done);
		});

		it('\'/recipe/:query\' with valid query should return 200', function(done) {
			makeGetRequest('/recipe/bread', 200, done);
		});

		it('\'/contact\' should return 200', function(done) {
			makeGetRequest('/contact', 200, done);
		});

		it('\'/login\' should return 200', function(done) {
			makeGetRequest('/login', 200, done);
		});

		it('\'/register\' should return 200', function(done) {
			makeGetRequest('/register', 200, done);
		});
	});

	
});
