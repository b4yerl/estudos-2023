/*
 * A Predicate<T> aceita um argumento T e retorna um boolean
 * Utilizada principalente para filtrar os elementos da Stream
 */
package stream;

import java.util.Arrays;
import java.util.List;

public class PredicateExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3);

    // Neste caso o filter() recebe o Predicate com a regra estabelecida.
    numbers.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
  }
}
