const {Given, When, Then} = require('cucumber');
const assert = require('assert');

// valid registration

var userDetails = [
	'validUsername',
	'validPassword',
	'validFirstName',
	'validLastName'
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
	browser.waitForVisible('#dialog', 2000);
	let result = browser.getText('#dialog');
	assert.equal(result, text);
}

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
	submitAndVerify('Registered and Logged in');
});

