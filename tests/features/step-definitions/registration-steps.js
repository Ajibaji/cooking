const {Given, When, Then} = require('cucumber');

// valid registration

Given(/I am on the registration page/, function(callback) {
	callback(null, 'pending');
});

When(/valid username/, function(callback) {
	callback(null, 'pending');
});

Then(/confirming my registration/, function(callback) {
	callback(null, 'pending');
});
