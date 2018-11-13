const User = require('../../lib/model/user');
const Recipe = require('../../lib/model/recipe');

const monk = require('monk');
let db = monk('localhost:27017/sg'); // set to sgTest for test db
let users = db.get('users');


var testUserList = [
	new User('testUser1', 'testPassword1', 'testFirstName1', 'testLastName1'),
	new User('testUser2', 'testPassword2', 'testFirstName2', 'testLastName2'),
	new User('testUser3', 'testPassword3', 'testFirstName3', 'testLastName3')
];

var databaseSetup = {

	addTestData: function() {
		users.insert(testUserList)
			.catch((err) => {
				// console.log(err);
            }).then(() => db.close());
	},
	clearTestData: function() {
		users.drop()
			.catch((err) => {
				// console.log(err);
            }).then(() => db.close());
	},
};


// databaseSetup.clearTestData();
// databaseSetup.addTestData();


module.exports = databaseSetup;
