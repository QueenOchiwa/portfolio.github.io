<?php
    //lets get all our values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = "emailme@larosedev.site"; //email receiver adress
            $subject = "From $name <$email>";
            $body = "Name: $name\nEmail: $email\n\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email"; //sender email

            if(mail($receiver, $subject, $body, $sender)) {// mail() is an inbuilt function
                echo "Your Message has been sent! ✔";
            } else {
                echo "Sorry, failed to send your message!";
            }
        } else {
            echo "Please Enter a Valid Email!";
        }
    } else {
        echo "Email and Message field is required!";
    }
?>
