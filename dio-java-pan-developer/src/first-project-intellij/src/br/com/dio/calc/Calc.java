package br.com.dio.calc;

import java.util.Scanner;

public class Calc {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int a, b;

        System.out.print("Insert the first value: ");
        a = scan.nextInt();
        System.out.print("Insert the second value: ");
        b = scan.nextInt();

        int sum = sum(a, b);
        int subtract = subtract(a, b);

        System.out.printf("%d + %d = %d \n", a, b, sum);
        System.out.printf("%d - %d = %d \n", a, b, subtract);
    }

    public static int sum(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }
}
