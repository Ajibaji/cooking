const {After, Before, Given, When, Then} = require('cucumber');
const dbSetup = require('../../helpers/dbSetupScripts');
const assert = require('assert');

// valid registration

var userDetails = [
	'validUsername',
	'validPassword',
	'validFirstName',
	'validLastName',
	'testUser1'
];

var selectors = [
	'#inputUsername',
	'#inputPassword',
	'#inputFirstname',
	'#inputLastname',
	'#btnRegister',
];

function submitAndVerify(text) {
	browser.click(selectors[4]);
	let result = browser.getText('#dialog');
	assert.equal(result, text);
}

Before(function () {
	dbSetup.addTestData();
});

After(function () {
	dbSetup.clearTestData();
});

// sucess login

Given(/I am on the registration page/, function() {
	browser.url('http://localhost:3000/register');
});

When(/valid username/, function() {
	for(let i = 0; i < 4; i ++) {
		browser.setValue(selectors[i], userDetails[i]);
	}
});

Then(/confirming my registration/, function() {
	browser.click(selectors[4]);
	browser.waitUntil(function () {
		return browser.getUrl() === 'http://localhost:3000/';
	}, 2000, 'expected ' +  browser.getUrl() + 'to be different after 5s');
});

When(/an in use username/, function() {
	browser.setValue(selectors[0], userDetails[4]);
	for(let i = 1; i < 4; i ++) {
		browser.setValue(selectors[i], userDetails[i]);
	}
});

Then(/username has been taken/, function() {
	browser.click(selectors[4]);
	let result = browser.getText('#dialog');
	browser.waitUntil(function () {
		return result === 'Username taken';
	}, 2000, 'expected ' +  result + 'to be Username taken');
});

When(/nothing entered/, function() {
	browser.click(selectors[4]);
});

Then(/enter all fields/, function() {
	let result = browser.getText('#dialog');
	assert.equal(result, 'Please fill in all fields');
});
