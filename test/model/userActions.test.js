const apiActions = require('../../lib/api-actions');
const {findUsername, matchPassword} = require('../../lib/model/userActions');
const userActions = require('../../lib/model/userActions');
jest.mock('../../lib/api-actions');
const {req, collection, res} = require('../__mocks__/userActionsMocks');
const resCode = jest.spyOn(res, 'status');

let testUsername = 'testUsername';

describe('Username/ Password matchers', function() {

	it('findUsername Returns true with existing user', function() {
		expect(findUsername(testUsername, collection)).toBeTruthy();
	});

	it('findUsername Returns false with non existing user', function() {
		expect(findUsername(testUsername, collection)).toBeFalsy();
	});
});

describe('processRegistration', () => {
    
	it('Returns with status 200 and cookie if valid username', function() {
		userActions.processRegistration(req, collection, res);
		expect(resCode).toHaveBeenCalledWith(200);
	});

	it('Returns status 418 and no cookie if bad username', function() {
		userActions.processRegistration(req, collection, res);
		expect(resCode).toHaveBeenCalledWith(418);
	});
});

describe('processLogin', () => {

	it('Returns with status 200 and cookie if valid Login details', function() {
		userActions.processRegistration(req, collection, res);
		expect(resCode).toHaveBeenCalledWith(200);
	});

	it('returns status 418 and no cookie if in use username', function() {
		userActions.processRegistration(req, collection, res);
		expect(resCode).toHaveBeenCalledWith(418);
	});

	it('returns 418 and no cookie if incorrect password', function() {
		userActions.processRegistration(req, collection, res);
		expect(resCode).toHaveBeenCalledWith(418);
	});
});