module.exports = class User {
	constructor(username, password, firstName, lastName) {
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	setId(id) {
		this._id = id;
	}
};