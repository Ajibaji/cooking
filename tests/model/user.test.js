var User = require('../../lib/model/user');

var testUsername = 'testUsername';
var testPassword = 'testPassword';
var testFirstName = 'testFirstName';
var testLastName = 'testLastName';
var testId = 'testId';

var testUser = new User(testUsername, testPassword, testFirstName, testLastName);

test('Username is correct', () => {
	expect(testUser.username).toEqual(testUsername);
});

test('Password is correct', () => {
	expect(testUser.password).toEqual(testPassword);
});

test('First name is correct', () => {
	expect(testUser.firstName).toEqual(testFirstName);
});

test('Last name is correct', () => {
	expect(testUser.lastName).toEqual(testLastName);
});

test('Id can be set', () => {
	testUser.setId(testId);
	expect(testUser._id).toEqual(testId);
});