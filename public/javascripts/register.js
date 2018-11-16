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
		}).always((data) => {
			if(data.status === 200) {
				banner('Registered and Logged in!', true);
				window.location.href = '/';
			} else {
				$('#userDetails').effect('shake');
				banner('Username taken', false);
			}
		});
	}
	else {
		$('#userDetails').effect('shake');
		banner('Please fill in all fields');
		return false;
	}
}

function logout(event) {
	banner('Logged Out', true);
	window.location.href = '/logout';
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
			'password': $('#inputPassword').val()
		};

		$.ajax({
			type: 'POST',
			data: userDetails,
			url: '/login',
			dataType: 'JSON'
		}).always((data) => {
			if(data.status === 200) {
				window.location.href = '/';
				banner('Logged in!', true);
			} else {
				$('#loginDetails').effect('shake');
				banner('Incorrect username or password');
				$('#loginDetails').effect('shake');	
			}
		});
	}
	else {
		$('#loginDetails').effect('shake');
		banner('Please fill in all fields');
		return false;
	}
}
