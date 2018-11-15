const {Given, When, Then} = require('cucumber');
const expect = require('mocha');
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

Given(/I am on the registration page/, function() {
	browser.url('http://localhost:3000/register');
});

When(/valid username/, function() {
	for(let i = 0; i < 4; i ++) {
		browser.setValue(selectors[i], userDetails[i]);
	}
	browser.click(selectors[4]);
});

Then(/confirming my registration/, function() {
	try {
		browser.alertAccept();
	} catch(e) {
		console.log(e);
	}
});
