<?php
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");
    //lets get all our values
    $headers = array("From: from@example.com",
        "Reply-To: replyto@example.com",
        "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) { //email receiver adress
            $subject = "From $name <$email>";
            $body = "Name: $name\nEmail: $email\n\nMessage: $message\n\nRegards,\n$name";

            if(mail('emailme@larosedev.site', $subject, $body, $headers)) {// mail() is an inbuilt function
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
