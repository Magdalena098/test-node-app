$(function(){
	const query = input.value;
	var value = new RegExp("("+query+")");
 $('#city').on('input', function(e){
   	console.log("where is our data");
     var parameters = { city: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
       console.log(data);
     });
 });
});
