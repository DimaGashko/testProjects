<?php

spl_autoload_register(function($class_name) {
    require $class_name . '.php';
});

class Student extends Person {
    const CASH = 0;

    public $uni;

    function __construct($firstName, $lastName, $age, $uni) {
        parent::__construct($firstName . '.', $lastName . '.', $age + 1);
        $this->uni = $uni;
    }

    function getFullName() {
        $name = parent::getFullName();
        return "Student $name";
    }
}
