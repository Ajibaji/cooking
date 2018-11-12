const express = require('express');
const router = express.Router();
const config = require('../../config');
const apiActions = require('../api-actions');
const userActions = require('../model/userActions');

router.get('/', function(req, res) {
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('index', {
			title: 'Cookbook',
			loggedIn: loggedIn,
			username: userInfo.username,
			userId: userInfo._id
		});
	});
});

router.get('/recipestore', function(req, res) {
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('recipestore', {
			title: 'Recipe Store',
			loggedIn: loggedIn,
			username: userInfo.username,
			userId: userInfo._id
		});
	});
});

router.get('/recipe/:query', function(req, res) {
	let query = decodeURI(req.params.query).replace(/ /g,'_');
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};
		
		apiActions.getDocumentByTitle(collection, 'j:"' + req.cookies.cookinguser + '"', query, function(docs) {
			res.render('recipe', {
				title: 'Recipe',
				recipeName: docs[0].recipeName,
				cookingTime: docs[0].cookingTime,
				ingredients: docs[0].ingredients,
				method: docs[0].method,
				loggedIn: loggedIn,
				username: userInfo.username,
				userId: userInfo._id
			});
		});
	});
});

router.get('/contact', function(req, res) {
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('contact', {
			title: 'Contact us',
			loggedIn: loggedIn,
			username: userInfo.username,
			userId: userInfo._id
		});
	});
});

router.get('/login', function(req, res){
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('login', {
			title: 'Login',
			loggedIn: loggedIn,
			username: userInfo.username,
			userId: userInfo._id
		});
	});
});

router.get('/logout', function(req, res){
	res.cookie('cookinguser', '');
	res.redirect('/');
});

router.get('/register', function (req, res) {
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('register', {
			title: 'Register',
			loggedIn: loggedIn,
			username: userInfo.username,
			userId: userInfo._id
		});
	});
});

router.post('/login', function(req, res) {
	let collection = req.db.get(config.dataBase);
	userActions.processLogin(req, collection, res);
});

router.post('/register', function(req, res) {
	let collection = req.db.get('users');
	userActions.processRegistration(req, collection, res);
});

router.get('/account/:id', function(req, res) {
	let collection = req.db.get(config.dataBase);
	let userId = req.cookies.cookinguser;

	apiActions.getUserInfo(collection, userId, function(user) {
		let loggedIn = req.cookies.cookinguser ? true : false;
		let userInfo = user ? user[0] : {};

		res.render('account', {
			title: 'Account',
			loggedIn: loggedIn,
			username: userInfo.username,
			firstname: userInfo.firstname,
			lastname: userInfo.lastname,
			userId: userInfo._id
		});
	});
});

module.exports = router;
