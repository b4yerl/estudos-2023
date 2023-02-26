package br.com.dio;

import br.com.dio.model.Cat;

public class FirstProgram {
    public static void main(String[] args) {
        /*int a = 10;
        int b = 5;
        System.out.println("Hello, world! " + (a + b));*/

        Cat felix = new Cat("Felix", "Black", 5);

        System.out.println(felix.toString());

        felix.setAge(10);

        System.out.println(felix);
    }
}
