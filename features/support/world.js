const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./scope');

class CustomWorld {
	constructor() {
		scope.driver = puppeteer;
	}
}

setWorldConstructor(CustomWorld);