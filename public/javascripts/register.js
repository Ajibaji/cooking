<<<<<<< HEAD
(function(exports) {
	function registerUser(event) {
		event.preventDefault();

		var errorCount = 0;
		$('#userDetails input').each(function(index, val) {
			if($(this).val() === '') { errorCount++; }
		});

		if(errorCount === 0) {

			var userDetails = {
				'username': $('#inputUsername').val(),
				'firstname': $('#inputFirstname').val(),
				'lastname': $('#inputLastname').val(),
				'password': $('#inputPassword').val()
			};

			alert('Account created sucessfuly');

			$.ajax({
				type: 'POST',
				data: userDetails,
				url: '/register',
				dataType: 'JSON'
			}).done();

			
		}
		else {
			alert('Please fill in all fields');
			return false;
		}
	}

	function login(event) {
		event.preventDefault();

		var errorCount = 0;
		$('#loginDetails input').each(function(index, val) {
			if($(this).val() === '') { errorCount++; }
		});

		if(errorCount === 0) {

			var userDetails = {
				'username': $('#inputUsername').val(),
				'firstname': $('#inputFirstname').val()
			};

			alert('Logged in successfully');

			$.ajax({
				type: 'POST',
				data: userDetails,
				url: '/login',
				dataType: 'JSON'
			}).done();
		}
		else {
			alert('Please fill in all fields');
			return false;
		}
	}

	exports.registerUser = registerUser;
	exports.login = login;

})(this);
=======
function registerUser(event) {
	event.preventDefault();

	var errorCount = 0;
	$('#userDetails input').each(function(index, val) {
		if($(this).val() === '') { errorCount++; }
	});

	if(errorCount === 0) {

		var userDetails = {
			'username': $('#inputUsername').val(),
			'firstname': $('#inputFirstname').val(),
			'lastname': $('#inputLastname').val(),
			'password': $('#inputPassword').val()
		};

		$.ajax({
			type: 'POST',
			data: userDetails,
			url: '/register',
			dataType: 'JSON'
		}).done();
	}
	else {
		alert('Please fill in all fields');
		return false;
	}
}

function login(event) {
	event.preventDefault();

	var errorCount = 0;
	$('#loginDetails input').each(function(index, val) {
		if($(this).val() === '') { errorCount++; }
	});

	if(errorCount === 0) {

		var userDetails = {
			'username': $('#inputUsername').val(),
			'firstname': $('#inputFirstname').val()
		};

		$.ajax({
			type: 'POST',
			data: userDetails,
			url: '/login',
			dataType: 'JSON'
		}).done();
	}
	else {
		alert('Please fill in all fields');
		return false;
	}
}
>>>>>>> 449a71541f72007a328cb068be37aa5f0de9cb27
