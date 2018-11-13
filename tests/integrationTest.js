/**
 * This file contains all integration tests simulating cxonnections betweenm the server and 
 * database
 * 
 */
const User = require('../lib/model/user');
const Recipe = require('../lib/model/recipe');
const dbSetup = require('./helpers/dbSetupScripts');
const request = require('supertest');
const app = require('../app');


describe('Integration tests', function() {

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

	describe('Database Integration Tests', function() {
	
		let testUsername = 'testUsername';
		let testRecipeName = 'testRecipe';
	
		let testUser = new User(testUsername);
		let testRecipe = new Recipe(testRecipeName);
	
		// it('Server should send a Recipe', function(done) {
			
		// });
	
		// it('Server should recievce a User', function(done) {
			
		// });	
	});
	
	describe('Get request Tests', function() {

		it(" '/' should return status of 200", function(done) {
			makeGetRequest('/', 200, done);
		});

		it("'/recipestore' should return status of 200", function(done) {
			makeGetRequest('/recipestore', 200, done);
		});

		it("'/recipe/:query' with valid query should return 200", function(done) {
			makeGetRequest('/recipe/bread', 200, done);
		});

		it("'/contact' should return 200", function(done) {
			makeGetRequest('/contact', 200, done);
		});

		it("'/login' should return 200", function(done) {
			makeGetRequest('/login', 200, done);
		});

		it("'/register' should return 200", function(done) {
			makeGetRequest('/register', 200, done);
		});
	});

	describe('Post request Tests', function() {

		// login
		
		it("'/login' with valid params should return 200", function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'testPassword1'
			};
			makePostRequest('/login', 200, data, done);
		});

		it("'/login' with invalid params should return 418", function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'fakepassword'
			};
			makePostRequest('/login', 418, data, done);
		});

		// register

		it("'/register' with valid params should return 200", function(done) {
			let data = {
				'username': 'newUser1',
				'password': 'testPassword1',
				'firstName': 'testFirstName',
				'lastName': 'testLastname'
			};
			makePostRequest('/login', 200, data, done);
		});

		it("'/register' with invalid params should return 418", function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'testPassword1',
				'firstName': 'testFirstName',
				'lastName': 'testLastname'
			};
			makePostRequest('/login', 418, data, done);
		});

	});
});
