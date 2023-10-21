<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $number = $_POST["number"];
  $location = $_POST["location"];
  $message = $_POST["message"];

  // You can now process the form data (e.g., send an email, save to a database, etc.)

  // For example, to send an email:
  $to = "naveentiwari112@gmail.com";
  $subject = "Contact Form Submission from $name";
  $headers = "From: $email";

  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Phone Number: $number\n";
  $email_message .= "Location: $location\n";
  $email_message .= "Message:\n$message";

  mail($to, $subject, $email_message, $headers);

  // Redirect to a thank you page or back to the form page
  header("Location: www.google.com");
}
?>
