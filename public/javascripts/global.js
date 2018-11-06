const populateTable =  require('./populateTable');
const showRecipeDetails = require('./showRecipeDetails');
const {addRecipe, deleteRecipe} = require('./recipes');

var documentListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

	populateTable();

	$('#documentList table tbody').on('click', 'td a.linkshowrecipedetails', showRecipeDetails);
	
	$('#btnAddRecipe').on('click', addRecipe);

	$('#documentList table tbody').on('click', 'td a.linkdeleterecipe', deleteRecipe);

	$('#btnSearch').on('click', addShownClass);

	$('#btnSearch').on('click', searchHttp);
});

function addShownClass() {
	$('.searchList').addClass('shown');
}

function searchHttp(event) {
	
	var tableContent = '';

	var query = $('#inputSearchQuery').val();

	$.getJSON( '/documents/documentlist/' + query, function( data ) {
		$.each(data, function() {
			tableContent += '<tr>';
			tableContent += '<td><a href="' + this.recipeName + '" class="linkshowrecipedetails" rel="something">' + this.recipeName + '</a></td>';
			tableContent += '</tr>';
		});
		$('.searchList table tbody').html(tableContent);
	});
	
	$.getJSON( '/documents/recipesearch/' + query, function( data ) {
		$.each(data.parsed, function() {
			tableContent += '<tr>';
			tableContent += '<td><a href="' + this.source_url + '" class="linkshowrecipedetailss" rel="' + this.title + '">' + this.title + '</a><img src="' + this.image_url + '"></img></td>';
			tableContent += '</tr>';
		});
		$('.searchList table tbody').html(tableContent);
	});
}
