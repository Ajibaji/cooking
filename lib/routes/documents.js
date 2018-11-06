var express = require('express');
var router = express.Router();
const http = require('https');
var config = require('../../config');
var apiActions = require('../api-actions');

const food2forkPath = '/api/search?key=c0172c962f73f5feeaddc283613ce9ef&&q=';

router.get('/documentlist', function(req, res) {
	var userId = 'j:"' + req.cookies.cookinguser + '"';
	
	apiActions.getDocuments(req.db.get(config.dataBase), userId, function(data) {
		res.json(data);
	});
});

router.get('/documentlist/:query', function(req, res) {
	var userId = 'j:"' + req.cookies.cookinguser + '"';
	var query = decodeURI(req.params.query);

	apiActions.getDocument(req.db.get(config.dataBase), userId, query, function (data) {
		res.json(data);
	});
});

router.post('/adddocument', function(req, res) {
	var collection = req.db.get(config.dataBase);

	apiActions.addDocument(collection, req.body, function() {
		res.send();
	});
});

router.delete('/deletedocument/:id', function(req, res) {
	var collection = req.db.get(config.dataBase);
	var id = req.params.id;
	
	apiActions.removeDocument(collection, id, function() {
		res.send();
	});
});

router.get('/recipesearch', function (req, res) {
	
	var httpDetails = {
		host: 'https://food2fork.com',
		path: '/'
	};

	_request(httpDetails, res);

});

router.get('/recipesearch/:query', function(req, res){

	var httpDetails = {
		query: req.params.query,
		host: 'www.food2fork.com',
		path: food2forkPath
	};
	
	_request(httpDetails, res);

});

var _request = function(httpDetails, res) {
	apiActions.makeHttpRequest(httpDetails, res, function(returnValue){
		res.json(returnValue);
	});
};

module.exports = router;
