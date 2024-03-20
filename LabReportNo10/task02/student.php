<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Connection variables
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "student_db";

    // Create connection
    $connection = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if (!$connection) {
        die("Connection failed: " . $connection->connect_error);
    }

    // Getting data from user
    $user = $_POST["name"];
    $password = $_POST["rollno"];
    $age = $_POST["age"];
    $grade = $_POST["grade"];

    // SQL to get user data
    $sql = "INSERT INTO students (name, rollno, age, grade) VALUES ('$user', '$password', '$age', '$grade')";

    if ($connection->query($sql) == TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $connection->close();
}
