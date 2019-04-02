<?php

echo 'simple string ';

echo 'multiline 
string is well! ';

echo ' C:\\*.*? ';
echo ' C:\*.*? ';

echo ' \n\n\n\n ';

echo '$a $b';

echo "\n - - - - - - \n";

$a = 5;
$b = 10;

echo "$a + $b = ".($a + $b);

echo "\n - - - - - - \n";
echo "heredoc syntax: \n";

$str_heredoc = <<<EOD

I'm a string. I live in heredoc string and I love my home!

(heredoc strings is a good!)

EOD;

echo $str_heredoc;

echo "nowdoc syntax: \n";

echo <<< 'STR'

I'm a nowdoc string. I cool too. 

(I can fly, but I can't see variables $aa (: )
STR;

echo "\n Here's a complex syntax for string parsing: \n";

echo "{$a}";

?>