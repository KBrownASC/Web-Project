var database = firebase.database().ref();
//Button's actions
function sendMessage(){
	var message = $("#message").val();
	//send to your database
	database.push({
		'MESSAGE': message
		
	});
}
