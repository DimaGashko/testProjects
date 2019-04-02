<?php

$a_boolean = true;
$b_boolean = false;
$a_str = 'string';
$num = 5;

if ($a_boolean) {
   $num++;
}

if (!$b_boolean) {
   $num--;
}

if (is_string($a_str)) {
   $a_str = 'I\'m really a '.$a_str;
}

echo $a_str;
echo '<br>';
echo gettype($b_boolean);
echo '<br>';
echo var_dump($num);

?>