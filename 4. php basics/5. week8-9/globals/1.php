<?php

$x = "I'm an X";

function hello()
{
    $y = "I'm an Y";

    echo $GLOBALS["x"];
}

hello();

?>

<form method="POST">
    <input type="hidden" name="name" value="value">
    <button type="submit">JUST PRESS ME!</button>
</form>

<pre><?= var_dump($_GET); ?></pre>
<pre><?= var_dump($_POST); ?></pre>
<pre><?= var_dump($_SERVER); ?></pre>
<pre><?= var_dump($_SELF); ?></pre>