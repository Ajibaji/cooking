context('User Accounts', function() {

	const OLD_ENV = process.env;

	var testUsernameReg = 'testUsername';
	var testPasswordReg = 'testPassword';
	var testFirstName = 'testFirstName';
	var testSirName = 'testSirName';

	var testUsernameLog = 'realUsername';
	var testPasswordLog = 'realPassword';

	beforeEach(function() {
		process.env.NODE_ENV = 'dev';
		// add test data
		cy.visit('/');
	});

	afterEach(function() {
		// clear test data
		process.env = OLD_ENV;
	});

	function usernameAndApssword(username, password) {
		cy.get('#inputUsername').type(username);
		cy.get('#inputPassword').type(password);
	}

	function register(username, password) {
		cy.get('a[href="/register"]').click();
		usernameAndApssword(username, password);
		cy.get('#inputFirstname').type(testFirstName);
		cy.get('#inputLastname').type(testSirName);
	}

	function logIn(username, password) {
		cy.get('a[href="/login"]').click();
		usernameAndApssword(username, password);
	}

	function testAlertMessage(message, button) {
		const stub = cy.stub();
		cy.on('window:alert', stub);
		cy
			.get(button).click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(message);
			});
	}

	describe('User Registration', function() {

		it('User can register an account sucessfully', function() {
			register(testUsernameReg, testPasswordReg);
			testAlertMessage('Account created sucessfuly', '#btnRegister');
		});

		it('User cannot register with in use username', function() {
			register(testUsernameLog, testPasswordReg);
			testAlertMessage('Username Taken', '#btnRegister');
		});

	});

	describe('User Log In', function() {

		it('User Can Sign in A Registered User', function() {
			logIn(testUsernameLog, testPasswordLog);
			testAlertMessage('Logged in successfully', '#btnLogin');
		});

		it('User Cannot Sign in A Non Registerd User', function() {
			logIn(testUsernameReg, testPasswordLog);
			testAlertMessage('Invalid Username or Password', '#btnLogin');
		});

		it('User Cnoot Sign in with Incorrect Password', function() {
			logIn(testUsernameLog, testPasswordReg);
			testAlertMessage('Invalid Username or Password', '#btnLogin');
		});
	});
});