const User = require('../../lib/model/user');
const Recipe = require('../../lib/model/recipe');

const monk = require('monk');
let db = monk('localhost:27017/sg'); // set to sgTest for test db
let users = db.get('users');
let recipes = db.get('recipes');

let stubIdUser = new User('testUser1', 'testPassword1', 'testFirstName1', 'testLastName1');
let stubIdRecipe = new Recipe('testRecipe1', 15, 'squash', 'flattern witrh a mallet');

let testUserList = [
	stubIdUser,
	new User('testUser3', 'testPassword3', 'testFirstName3', 'testLastName3'),
	new User('testUser3', 'testPassword3', 'testFirstName3', 'testLastName3')
];

let testRecipeList = [
	stubIdRecipe,
	new Recipe('testRecipe1', 11, 'bread', 'boil')
];

var databaseSetup = {

	addTestData: function() {
		stubIdUser.setId('5bec4b21d78d282e16f87415');
		stubIdRecipe.set_id('5bec4b21d78d282e16f87415');
		stubIdRecipe.setUserId('j:\"5bec4b21d78d282e16f87415\"');
		users.insert(testUserList)
			.catch((err) => {
				// console.log(err);
			}).then(() => db.close());
		recipes.insert(testRecipeList)
			.catch((err) => {
				// console.log(err);
			}).then(() => db.close());
	},
	clearTestData: function() {
		users.drop()
			.catch((err) => {
				// console.log(err);
			}).then(() => db.close());
		recipes.drop()
			.catch((err) => {
				// console.log(err);
			}).then(() => db.close());
	},
};


// databaseSetup.clearTestData();
// databaseSetup.addTestData();


module.exports = databaseSetup;
