module.exports = class Recipe {
	constructor(name, time, ingredients, method) {
		this.name = name;
		this.time = time;
		this.ingredits = ingredients;
		this.method = method;
		// this.userId = userId;
	}

	set_id(id) {
		this._id = id;
	}

	setUserId(id) {
		this.userID = id;
	}
};