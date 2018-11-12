const apiActions = require('../api-actions');

function findUsername(username, collection) {
	collection.findOne({username: username}).then((doc) => {
		return doc;
	});
}

let userActions = {
	processRegistration: function(req, collection, res) {
		let userDetails = {
			username: req.body.username,
			password: req.body.password,
			firstname: req.body.firstname,
			lastname: req.body.lastname
		};
		var x;
		x = findUsername(userDetails.username, collection);
		console.log(x);
		if(x === null) {
			res.status(418).send();
			return;
		} else {
			apiActions.registerUser(collection, userDetails, function() {
				apiActions.getUserID(collection, req.body.username, function(id) {
					res.cookie('cookinguser', id);
					res.status(200).send();
				});
			});
		}
	},
	processLogin: function(req, collection, res) {
		let userDetails = {
			username: req.body.username,
			password: req.body.password
		};
		let user = findUsername(userDetails.username, collection);
		if(user !== null) {
			res.status(418).send();
			return;
		}
		if(user.password !== userDetails.password) {
			res.status(418).send();
			return;
		}
		apiActions.getUserID(collection, req.body.username, function(id) {
			res.cookie('cookinguser', id);
			res.status(500).send();
		});
	}
};

module.exports = userActions;
module.exports.findUsername = findUsername;