
const express = require('express');
const app = express();

//create server

app.listen(3000, function(){
	console.log('listening on 113000');
})

//client side
app.get('/', function(req, res){
	res.sendFile('/Users/chizwil/Documents/projects/csquared/index.html');
})
//client post
app.post('/contact', function(){
	console.log('conatct');
	
})
	

	