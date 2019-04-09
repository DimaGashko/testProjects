<?php

spl_autoload_register(function($class_name) {
    require $class_name . '.php';
});

$p = new Student("Dmitry", "Gashko", 20, "My Uni");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>People</h1>
    <div class="Person">
        <?= $p->getFullName() . " ($p->age)" ?>

    </div>
</body>
</html>