<?php

$fields = array_slice($argv, 1, $argc);

$file = fopen('test.csv', 'r+');

$write = false;

while (($row = fgetcsv($file, 0, ',')) !== false) {
    if ($row[0] != $fields[0]) continue;

    $write = true;

    //fseek($file, -1, );
    fputcsv($file, $fields, ',');
    echo "Already Exist" . PHP_EOL;

    var_dump(ftell($file));

    break;
}

if (!$write) {
    fputcsv($file, $fields, ',');
}

fclose($file);
