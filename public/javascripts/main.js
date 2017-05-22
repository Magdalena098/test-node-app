$(function(){
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
     });
});
