<<<<<<< HEAD
(function(exports) {
	function getCookie(name, next) {
		var value = '; ' + document.cookie;
		var parts = value.split('; ' + name + '=');
		if (parts.length == 2) {
			next(parts.pop().split(';').shift());
		}
=======
function getCookie(name, next) {
	var value = '; ' + document.cookie;
	var parts = value.split('; ' + name + '=');
	if (parts.length == 2) {
		next(parts.pop().split(';').shift());
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27
	}

	function addRecipe(event) {
		event.preventDefault();

<<<<<<< HEAD
		var errorCount = 0;
		$('#addRecipe input').each(function(index, val) {
			if($(this).val() === '') { errorCount++; }
		});
=======
	var errorCount = 0;
	$('#addRecipe input').each(function(index, val) {
		if($(this).val() === '') { errorCount++; }
	});
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27

		if(errorCount === 0) {

<<<<<<< HEAD
			var userID = '';

			getCookie('cookinguser', function(cookieId) {
				userID = decodeURIComponent(cookieId);
			});

			var newRecipe = {
				'recipeName': $('#inputRecipeName').val(),
				'cookingTime': $('#inputCookingTime').val(),
				'ingredients': $('#inputIngredients').val(),
				'method': $('#inputMethod').val(),
				'userID': userID.valueOf()
			};

			$.ajax({
				type: 'POST',
				data: newRecipe,
				url: '/documents/adddocument',
				dataType: 'JSON'
			}).done(function( response ) {

				if (response.msg === '') {
					$('#addRecipe fieldset input').val('');
					populateTable();
				}
				else {
					alert('Error: ' + response.msg);
				}
			});
		}
		else {
			alert('Please fill in all fields');
			return false;
		}
	}
=======
		var userID = '';

		getCookie('cookinguser', function(cookieId) {
			userID = decodeURIComponent(cookieId);
		});

		var newRecipe = {
			'recipeName': $('#inputRecipeName').val(),
			'cookingTime': $('#inputCookingTime').val(),
			'ingredients': $('#inputIngredients').val(),
			'method': $('#inputMethod').val(),
			'userID': userID.valueOf()
		};

		$.ajax({
			type: 'POST',
			data: newRecipe,
			url: '/documents/adddocument',
			dataType: 'JSON'
		}).done(function( response ) {

			if (response.msg === '') {
				$('#addRecipe fieldset input').val('');
				populateTable();
			}
			else {
				alert('Error: ' + response.msg);
			}
		});
	}
	else {
		alert('Please fill in all fields');
		return false;
	}
}
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27

	function deleteRecipe(event) {
		event.preventDefault();

		var confirmation = confirm('Are you sure you want to delete this user?');

<<<<<<< HEAD
		if (confirmation === true) {
			$.ajax({
				type: 'DELETE',
				url: '/documents/deletedocument/' + $(this).attr('rel')
			}).done(function( response ) {

				if (response.msg === '') {
				}
				else {
					alert('Error: ' + response.msg);
				}

				populateTable();
			});
		} else {
			return false;
		}
=======
	if (confirmation === true) {
		$.ajax({
			type: 'DELETE',
			url: '/documents/deletedocument/' + $(this).attr('rel')
		}).done(function( response ) {

			if (response.msg === '') {
			}
			else {
				alert('Error: ' + response.msg);
			}

			populateTable();
		});
	} else {
		return false;
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27
	}

	exports.addRecipe = addRecipe;
	exports.deleteRecipe = deleteRecipe;

})(this);