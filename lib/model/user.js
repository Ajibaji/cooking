module.exports = class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}

	setId(id) {
		this.id = id;
	}
};
