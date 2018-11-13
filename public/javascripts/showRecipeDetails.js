(function(exports) {
	function showRecipeDetails(event) {

<<<<<<< HEAD
		event.preventDefault();

		var thisRecipeName = $(this).attr('rel');

		var arrayPosition = documentListData.map(function(arrayItem) { 
			return arrayItem.recipeName;
		}).indexOf(thisRecipeName);

		var thisRecipeObject = documentListData[arrayPosition];

		$('#recipeInfoName').text(thisRecipeObject.recipeName);
		$('#recipeInfoCookingTime').text(thisRecipeObject.cookingTime);
		$('#recipeInfoIngredients').text(thisRecipeObject.ingredients);
		$('#recipeMethod').text(thisRecipeObject.method);

		$('#recipeDetails').removeClass('hidden');
		$('#recipeDetails').addClass('active');
	}

	exports.showRecipeDetails = showRecipeDetails;

})(this);
=======
	event.preventDefault();

	var thisRecipeName = $(this).attr('rel');

	var arrayPosition = documentListData.map(function(arrayItem) { 
		return arrayItem.recipeName;
	}).indexOf(thisRecipeName);

	var thisRecipeObject = documentListData[arrayPosition];

	$('#recipeInfoName').text(thisRecipeObject.recipeName);
	$('#recipeInfoCookingTime').text(thisRecipeObject.cookingTime);
	$('#recipeInfoIngredients').text(thisRecipeObject.ingredients);
	$('#recipeMethod').text(thisRecipeObject.method);

	$('#recipeDetails').removeClass('hidden');
	$('#recipeDetails').addClass('active');
}
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27
