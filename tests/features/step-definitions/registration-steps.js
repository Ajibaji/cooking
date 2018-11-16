const expect = require('mocha').expect;

module.exports = function() {
	this.Given(/I am on the registration page/, function(callback) {
		browser.url('/register');
		expect(2).toBe(2);
	});
	
	// this.When(/valid username/, function(callback) {
	// 	callback(null, 'pending');
	// });
	
	this.Then(/confirming my registration/, function(callback) {
		expect(2).toBe(2);
	});
};
