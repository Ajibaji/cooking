var mocks = {
	req: {
		body: {
			username: 'stubUsername',
			password: 'stubPassword',
			firstName: 'stubName1',
			lastName: ' stubName2'
		}
	},
	collection: {
		findOne: function() {
			return Promise.resolve(null);
		}
	},
	res: {
		status: function(code) {
			return {
				send: () => {
					return code;
				}
			};
		}
	}
};

module.exports = mocks;