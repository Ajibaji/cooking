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

function handleAlert() {
	browser.alertAccept();
}

Given(/I am on the registration page/, function() {
	browser.url('http://localhost:3000/register');
});

When(/valid username/, function() {
	
});

Then(/confirming my registration/, function() {
	
});
