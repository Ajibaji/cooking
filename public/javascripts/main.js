var documentListData = [];

$(document).ready(function() {
	populateTable();
	$('#dialog').hide();
	$('#dialog').on('click', () => {$('#dialog').hide();});
	$('#documentList table tbody').on('click', 'td a.linkshowrecipedetails', showRecipeDetails);
	$('#btnAddRecipe').on('click', addRecipe);
	$('#documentList table tbody').on('click', 'td a.linkdeleterecipe', deleteRecipe);
	$('.search').on('click', addShownClass);
	$('.search').on('click', search);
	$('#btnRegister').on('click', registerUser);
	$('#btnLogin').on('click', login);
	$('#btnLogout').on('click', logout);
});

function banner(text, successBool) {
	if(successBool) {
		$('#dialog').addClass('alert alert-success');
	} else {
		$('#dialog').addClass('alert alert-danger');
	}
	$('#dialog').html(text);
	$('#dialog').show();
}
