	

$(".infos").click(function(){
	var first = $('#first_name').val();
	var last = $('#last_name').val();
	var ville = $('#city').val();
	var nom = $('#username').html(first + " " + last + " " + ville);
	
});