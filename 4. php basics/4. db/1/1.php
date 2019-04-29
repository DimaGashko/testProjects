<?php

$user = 'db_user';
$pass = 'qqqqqqqqww';

try {

    $dbh = new PDO('mysql:host=localhost;dbname=java_sem4_lab3', $user, $pass);

} catch(PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

foreach($dbh->query('SELECT * FROM book LIMIT 3') as $row) {
    print_r($row);
}

var_dump($dbh);

$dbh = null;

