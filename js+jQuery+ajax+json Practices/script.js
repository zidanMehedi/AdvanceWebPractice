$(document).ready(function(){

	$('#bt').click(function()
	{
		var json = {
			"name":$('#name').val(),
			"id":$('#id').val(),
			"dept":$('#dept').val()
		};
		var dataString = JSON.stringify(json);
		$.ajax({
			url:'file.php',
			method:'POST',
			data:'DT='+dataString,
			success: function(response){
				var obj = JSON.parse(response);
				$('#divName').html(obj.name);
				$('#divId').html(obj.id);
				$('#divDept').html(obj.dept);
			},
			error: function(error){
				alert(error.status);
			}
		});
		
	});

});