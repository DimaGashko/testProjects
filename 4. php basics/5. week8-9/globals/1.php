<?php

$x = "I'm an X";

function hello() {
    $y = "I'm an Y";

    echo $GLOBALS["x"];
}

var_dump($_GET);

hello();

?>

<form method="POST" action="hello.php">
    <input type="hidden" name="name" value="value">
    <button type="submit">JUST PRESS ME!</button>
</form>