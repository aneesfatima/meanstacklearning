$('#submit').on('click',function(e){
    
    e.preventDefault();
    
    var name = $('#name').val();
    var email = $('#email').val();
    
     $.ajax({
	    url: '/', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify({
            'name' : name,
            'email' : email
        }),
	    success:function(res){
            $('#container').html(name + ' ' + email);
        },
        error: function(res){console.log(res);}
	});
});


