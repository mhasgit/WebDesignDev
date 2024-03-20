<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Connection variables
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_registration_db";

    // Create connection
    $connection = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if (!$connection) {
        die("Connection failed: " . $connection->connect_error);
    }

    // Getting data from user
    $user = $_POST["name"];
    $regno = $_POST["regno"];
    $email = $_POST["email"];

    // SQL to get user data
    $sql = "INSERT INTO users (name, regno, email) VALUES ('$user', '$regno', '$email')";

    if ($connection->query($sql) == TRUE) {
        echo "New User Registered";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $connection->close();
}
