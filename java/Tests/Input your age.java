package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Input your age: ");
        int age = scanner.nextInt();

        if (age >= 18) {
            System.out.println("Content");

        } else {
            System.out.println("Your are younger then 18");
        }
    }

}