var Recipe = require('../lib/model/recipe');

const testName = 'testName';
const testTime = '11:00';
const testIngredients = ['sugar', 'flower', 'butter'];
const testMethod = 'testMethod';
const testUserId = 'testUserId';

var testRecipe = new Recipe(testName, testTime, testIngredients, testMethod);

test('Name is correct', () => {
	expect(testRecipe.name).toEqual(testName);
});

test('Time is correct', () => {
	expect(testRecipe.time).toEqual(testTime);
});

test('Ingredients are correct', () => {
	expect(testRecipe.ingredits).toEqual(testIngredients);
});

test('Method is correct', () => {
	expect(testRecipe.method).toEqual(testMethod);
});