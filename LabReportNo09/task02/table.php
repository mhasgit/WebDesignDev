<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the table input from the form
    $tableInput = $_POST['tableNum'];

    if (is_numeric($tableInput)) {
        $number = intval($tableInput);
        echo "<h2>Multiplication Table for $number</h2>";
        echo "<table border='1'>";

        for ($i = 1; $i <= 10; $i++) {
            echo "<tr>";
            echo "<td>$number</td>";
            echo "<td>x</td>";
            echo "<td>$i</td>";
            echo "<td>=</td>";
            echo "<td>" . ($number * $i) . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "<p>Please enter a valid number.</p>";
    }
}
?>