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
	'#btnLogin'
];

// Before(function () {
// 	dbSetup.addTestData();
// });

// After(function () {
// 	dbSetup.clearTestData();
// });

Given(/on the login page/, function() {
	browser.url('http://localhost:3000/login');
});

Given(/previously registered/, function() {
	browser.setValue(selectors[0], userDetails[0]);
});

When(/username and password/, function() {
	browser.setValue(selectors[1], userDetails[1]);
});

When(/Click the login button/, function() {
	browser.click(selectors[2]);
});

Then(/confirming my login/, function() {
	browser.waitUntil(function () {
		return browser.getUrl() === 'http://localhost:3000/';
	}, 2000, 'expected ' +  browser.getUrl() + 'to be different after 5s');
});

When(/wrong password/, function() {
	browser.setValue(selectors[1], userDetails[2]);
});

Then(/username or password was incorrect/, function() {
	let result = browser.getText('#dialog');
	browser.waitUntil(function () {
		return result === 'Incorrect username or password';
	}, 2000, 'expected ' +  result + 'to be different after 5s');
});

When(/non registered username/, function() {
	browser.setValue(selectors[0], userDetails[2]);
	browser.setValue(selectors[1], userDetails[1]);
});

When(/Have not filled in/, function() {
	
});

Then(/not entered any fields/, function() {
	let result = browser.getText('#dialog');
	browser.click(selectors[2]);
	browser.waitUntil(function () {
		return result === 'Please fill in all fields';
	}, 2000, 'expected ' +  result + 'Please fill in all fields');
});