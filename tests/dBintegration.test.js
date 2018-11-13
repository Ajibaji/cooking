/**
 * This file contains all integration tests simulating cxonnections betweenm the server and 
 * database
 * 
 */
const User = require('../lib/model/user');
const dbSetup = require('./helpers/dbSetupScripts');
const monk = require('monk');
const db = monk('localhost:27017/sgTest'); // set to sg for dev db
const users = db.get('users')
const recipes = db.get('recipes');
describe('Database Integration Tests', function() {

	afterAll(() => {
		dbSetup.clearTestData();
	});

	let username = 'testUsername';

	function insertDocument(doc, collection) {
		collection.insert(doc).then(() => db.close());
	}

	it('Server should send a User', () => {
		let testUser = new User(username, '', '', '');
		users.insert(testUser)
			.then((doc) => {
				db.close();
				expect(doc['username']).toEqual(testUser.username);
			});
	});

	// it('Server should recievce a User', () => {
	// 	users.findOne({username: username}, 'username')
	// 		.then((doc) => {
	// 			db.close();
	// 			expect(doc).toEqual(0);
	// 		})
	// });	
});
