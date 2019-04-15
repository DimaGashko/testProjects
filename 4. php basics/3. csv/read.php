<?php

$file = fopen('test.csv', 'r+');

while (($row = fgetcsv($file, 0, ',')) !== false) {
    var_dump($row);
}

fclose($file);