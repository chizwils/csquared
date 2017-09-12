
const express = require('express');
//adding email handler
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();


app.use('/public',express.static('/Users/chizwil/Documents/projects/csquared/public'))
app.use(bodyParser.urlencoded({extended: true}));

//create server

app.listen(3000, function(){
	console.log('listening on 113000');
})

//client side
app.get('/', function(req, res){
	res.sendFile('/Users/chizwil/Documents/projects/csquared/public/index.html');
})
//client post
app.post('/contact', function(req, res){
	console.log('conatct');
    
    
    var mailOpts, smtpTrans;
     //setting up nodemailer transport
    smtpTrans = nodemailer.createTransport({
        service: 'Yahoo',
        auth:{
            user:'chizwil@yahoo.com',
            pass: 'Thisis50@'
        }
    });
    
    //Mail options
    mailOpts = {
        from:  req.body.email,
        to: 'chizwil@yahoo.com',
        subject: "contacting from web",
        text: req.body.message
    };
    
    smtpTrans.sendMail(mailOpts, function(err, res){
        if(err){
            console.log('NOT SENT_______')
        }
        else{
            console.log('succesfull');
        }
    })
	
})
	

	