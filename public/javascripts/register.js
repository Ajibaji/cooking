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
				alert('Registered and Logged in!');
				window.location.href = 'http://209.97.128.22/';
			} else {
				alert('Username Taken');
			}
		});
	}
	else {
		alert('Please fill in all fields');
		return false;
	}
}

function logout(event) {
	alert('Logged Out');
	window.location.href = 'http://209.97.128.22/logout';
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
				alert('Logged in!');
				window.location.href = 'http://209.97.128.22/';
			} else {
				alert('Incorrect Username or Password entered');
			}
		});
	}
	else {
		alert('Please fill in all fields');
		return false;
	}
}