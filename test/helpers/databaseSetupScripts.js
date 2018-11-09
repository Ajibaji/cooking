const User = require('../../lib/model/user');
const Recipe = require('../../lib/model/recipe');

var databaseSetup = {

	addTestData: function() {

	},
	clearTestData: function() {

	},
	_testUserList: function() {
		return {
			new User()
		}
	},
	_testRecipeList: function() {

	}
};

module.exports.databaseSetup;