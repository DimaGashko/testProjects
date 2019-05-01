<?php

$user = 'db_user';
$pass = 'qqqqqqqqww';
$dbName = 'postindustria_week4And5_task1';

try {

    $dbh = new PDO("mysql:host=localhost;dbname=$dbName", $user, $pass);

} catch(PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$q = "INSERT INTO user(first_name, last_name, email) VALUES('first', 'last', 'email@gmail.com') ON DUPLICATE KEY UPDATE id=id+5;";

$st = $dbh->query("select * from user");

var_dump($st);

$a = $st->execute();

var_dump($a);
var_dump($st);
exit();
$rs = $dbh->exec($q);
var_dump($rs);

var_dump($dbh->lastInsertId('id'));

$dbh = null;

