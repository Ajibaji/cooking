const dbSetup = require('../helpers/dbSetupScripts');
const request = require('supertest');
const app = require('../../app');

describe('Router tests', function() {

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

	describe('Post request Tests', function() {

		beforeEach(function() {
			dbSetup.addTestData();
		});
	
		afterEach(function() {
			dbSetup.clearTestData();
		});

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
			makePostRequest('/register', 200, data, done);
		});

		it('\'/register\' with invalid params should return 418', function(done) {
			let data = {
				'username': 'testUser1',
				'password': 'testPassword1',
				'firstName': 'testFirstName',
				'lastName': 'testLastname'
			};
			makePostRequest('/register', 418, data, done);
		});

	});
	
	describe('Get request Tests', function() {

		it(' \'/\' should return status of 200', function(done) {
			makeGetRequest('/', 200, done);
		});

		it('\'/recipestore\' should return status of 200', function(done) {
			makeGetRequest('/recipestore', 200, done);
		});

		// it('\'/recipe/:query\' with valid query should return 200', function(done) {
		// 	makeGetRequest('/recipe/bread', 200, done);
		// });

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
