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
	browser.url('http://localhost:3000/login');
});

Given(/previously registered/, function() {
	browser.setValue(selectors[0], userDetails[0]);
});

When(/username and password/, function() {
    
});

When(/Click the login button/, function() {
    
});

Then(/confirming my login/, function() {
    
});