$(function(){
	console.log(1111);
 $('#city').on('input', function(e){
   	console.log("where is our data");
     var parameters = { city: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
       console.log(data);
     });
 });
});
