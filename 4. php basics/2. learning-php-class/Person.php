<?php

spl_autoload_register(function($class_name) {
    require $class_name . '.php';
});

class Person {
    public $firstName;
    public $lastName;
    public $age;

    function __construct($firstName, $lastName, $age) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->age = $age; 
    }

    function getFullName() {
        return "$this->firstName $this->lastName";
    }
}