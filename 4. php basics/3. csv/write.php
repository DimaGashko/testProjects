<?php

$fields = $argv;
unset($fields[0]);

$file = fopen('test.csv', 'r+');

fputcsv($file, $fields, ',');
fputcsv($file, $fields, ',');
fputcsv($file, $fields, ',');

fclose($file);

