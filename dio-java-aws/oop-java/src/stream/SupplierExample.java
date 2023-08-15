/*
 * A Supplier<T> não recebe argumento algum, mas retorna um valor do tipo T.
 * Muito usada para criar ou fornecer novos objetos.
 */
package stream;

import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Stream;

public class SupplierExample {
  public static void main(String[] args) {
    Supplier<String> cec = () -> "CRUZEIRO ESPORTE CLUBE";

    List<String> maioresTimes = Stream.generate(cec)
      .limit(5)
      .toList();

      maioresTimes.forEach(System.out::println);
  }
}
