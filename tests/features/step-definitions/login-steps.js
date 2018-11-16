const {After, Before, Given, When, Then} = require('cucumber');
const dbSetup = require('../../helpers/dbSetupScripts');
const assert = require('assert');

var userDetails = [
	'testUser1',
	'testPassword1',
	'invalidUsername',
	'invalidPassword'
];

var selectors = [
	'#inputUsername',
	'#inputPassword',
	'#btnRegister'
];

Given(/on the login page/, function() {

});

