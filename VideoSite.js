var storage = firebase.storage();
//Button's actions

function sendMessage(){
	var video = $("#video").val();
	//send to your database
	storage.push({
		'MESSAGE': video
	});
}

//code that places the random challenge on the challenge page. 

storage.on('child_added',function(dataRow){
		var row = dataRow.val();
		bta.push(row.MESSAGE);
		addToPage();
		// $("#messageBoard").append("<p>" + row.MESSAGE);
})
function addToPage(){
	$("#messageBoard").html('');
	rand = bta[Math.floor(Math.random() * bta.length)];
	$("#messageBoard").append("<p>" + rand);
}

