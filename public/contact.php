<?php
if (isset($_POST['submit'])){
//declare variable 
    //$email_form = 'chinedu@csquared.com';
    //$email_body = 'You have recieved a message form $name.\nHere is the message \n $message'
    $name = $_POST['full_name'];
    $message = $_POST['message'];
    $email = $_POST['email'];

    //required to send our mail 
    $from ='demo contact form';
    $to = 'chizwil@gmail.com';
    $body = 'From $name\n $email\n Message: \n\t $message';
    $subject = 'Message from $name'
// Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }

        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }

        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
// If there are no errors, send the email
        if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
            if (mail ($to, $subject, $body, $from)) {
                $result='<div class="alert alert-success">Thank You! I will be in touch</div>';
            } else {
                $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
            }
        }

}
?>