<?php
$emailTo = "knknpnkn@gmail.com";
$subject = "Arhi-Sna Web Email";
$emailFrom = Trim(stripslashes($_POST['emailFrom'])) . "\r\n";
$emailFrom .= "MIME-Version: 1.0\r\n";
$emailFrom .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$name = Trim(stripslashes($_POST['name']));
$company = Trim(stripslashes($_POST['company']));
$phone = Trim(stripslashes($_POST['phone']));
$message = Trim(stripslashes($_POST['message']));


//Prepare Email Body Text
$body = "<html><body>";
$body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$body .= "<tr style='background: #999; width:100%;'><td><img src='http://precious-resources-caught-in-a-pipeline.com/images/smalllogo.png'></td><td></td></tr>";
$body .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
$body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['emailFrom']) . "</td></tr>";
$body .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";
$body .= "<tr><td><strong>Phone:</strong> </td><td>" . $phone . "</td></tr>";
$body .= "<tr><td><strong>Message:</strong> </td><td>" . $message . "</td></tr>";
$body .= "</table>";
$body .= "</body></html>";
			
mail($emailTo, $subject, $body, "From: ".$emailFrom);

?>