<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_db"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$idea = $_POST['idea'];

// Insert data into the database
$sql = "INSERT INTO contact_form (name, email, phone, idea) VALUES ('$name', '$email', '$phone', '$idea')";

if ($conn->query($sql) === TRUE) {
    echo "Data stored successfully"; // Return success message
} else {
    echo "Error: " . $sql . "<br>" . $conn->error; // Return error message
}

// Close connection
$conn->close();
?>
