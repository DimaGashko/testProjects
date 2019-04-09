<?php

$date = new DateTime();
printDate($date);

$date->add(new DateInterval('P2Y2DT2H'));
printDate($date);

$date->modify('+1 day');
printDate($date);

$date->modify('-1 day');
printDate($date);

function printDate($date) {
    echo $date->format('Y-m-d h-i-s'), PHP_EOL;
}