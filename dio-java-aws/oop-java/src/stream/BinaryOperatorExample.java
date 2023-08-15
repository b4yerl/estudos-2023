/*
 * A BinaryOperator<T> recebe dois argumentos do tipo T e retorna um valor de mesmo tipo
 * A ideia é utilizar esta interface para redução em pares.
 */
package stream;

import java.util.Arrays;
import java.util.List;
import java.util.function.BinaryOperator;

public class BinaryOperatorExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

    // Repare que assim como no JS,
    // aqui também é necessário o acumulador, o ponto de partida, no reduce.
    BinaryOperator<Integer> multiplier = (x, y) -> x * y;
    Integer product = numbers.stream().reduce(1, multiplier);
    System.out.println(product);


    // Agora com Lambda Expression.
    product = numbers.stream().reduce(1, ((x, y) -> x * y));
    System.out.println(product);
  }
}
