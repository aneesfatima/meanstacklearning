
var chatApp = function(message,DATA){
    message= $('#input').val();
    this.username= prompt("Enter username");
    this.DATA= new Array();
    

var DATA = []
load();
var username;

// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves

$("#submit").click(function(value){
   var takeInput = $('#input').val();

   DATA.push(username + " " + takeInput);
   console.log(DATA);
   RenderJSON(DATA);
   save();
   $("#input").val('');
  
});


// This method appends the messages and displays it in the view. 
// This method is also responsible for "Clearing" the chat from Server.
function RenderJSON(data){

       $('#container').empty();
       for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
           
       $('#container').append(data[i]+"</br>");

       
       $("#clear").click(function(value){
          DATA = [];
          save();
          load();
       });
   }
}

// This method sends data to the server and stores it there.
function save(){
   $.ajax({
        url: 'http://nodedatastore.herokuapp.com/sumair', 
        type: 'POST', 
        contentType: 'application/json', 
        data: JSON.stringify(DATA),
        success:function(res){console.log(res);}
    });
}

// This method loads data from the server
function load(){

   $.get('http://nodedatastore.herokuapp.com/sumair',function(res){
        DATA = res;
       RenderJSON(DATA);

   
    });
}  

// This method is responsible for creating intervals, so the page refreshes automatically

$(document).ready(
   function(){
       username = prompt("Enter username");
       console.log(username);
       setInterval(function(){
           $('#container').html(load());
       },1000);
   }
);