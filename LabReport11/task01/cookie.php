<?php

//Example of Setting a Cookie

$name = "user";
$value = "Riaz";
$expires = time() + 3600; // 1 hour from now
$path = "/";
setcookie($name, $value, $expires, $path);

// Retrieving Cookies in PHP

if (isset($_COOKIE['user'])) {
    echo 'User: ' . htmlspecialchars($_COOKIE['user']);
} else {
    echo 'User cookie is not set.';
}

// Deleting Cookies

// Set the expiration date to one hour ago
// setcookie("user", "", time() - 3600, "/");

?>