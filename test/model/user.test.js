var User = require('../../lib/model/user');

const testUsername = 'testUsername';
const testPassword = 'testPassword';
const testId = 'testId';

var testUser = new User(testUsername, testPassword);

test('Username is correct', () => {
	expect(testUser.username).toEqual(testUsername);
});

test('Password is correct', () => {
	expect(testUser.password).toEqual(testPassword);
});

test('Id can be set', () => {
	testUser.setId(testId);
	expect(testUser.id).toEqual(testId);
});