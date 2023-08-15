/*
 * Representa uma função que recebe um argumento T
 * e retorna um resultado do tipo R.
 * Usada para transformar/mapear os elementos do Stream.
 */
package stream;

import java.util.Arrays;
import java.util.List;

public class FunctionExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

    // O map() recebe uma Function<T,R> para realizar o mapping
    // No caso abaixo temos um Function<Integer,Integer>.
    List<Integer> doubledNumbers = numbers.stream()
                                  .map(n -> n * 2)
                                  .toList();
    doubledNumbers.forEach(System.out::println);
  }
}
