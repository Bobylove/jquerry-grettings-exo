$(".infos").click(function(){
	var first = $('#first_name').val();
	var last = $('#last_name').val();
	var ville = $('#city').val();
	var obj = {
		prenom: first,
		nom1: last,
		city: ville
	};
	var hello = (obj.prenom + " " + obj.nom1 + " " + obj.city);
	$('#username').html(hello);
});