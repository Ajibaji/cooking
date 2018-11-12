module.exports = class Recipe {
	constructor(name, time, ingredients, method) {
		this.name = name;
		this.time = time;
		this.ingredits = ingredients;
		this.method = method;
		// this.userId = userId;
	}
};