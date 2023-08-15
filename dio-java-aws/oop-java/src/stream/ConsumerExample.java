/*
 * A interface funcional Consumer<T> não retorna valor algum
 * Sendo assim, a utilizamos para reaçizar ações / efeitos colaterais nos elementos do Stream
 * sem modificar ou retornar nada.
 */

package stream;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerExample {
  public static void main(String[] args) {
    List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
    
    Consumer<Integer> printEven = n -> {
      if(n % 2 == 0) System.out.println(n);
    };

    // O forEach() recebe um Consumer<T>
    nums.stream()
    .forEach(printEven);

    // Fazendo dessa maneira os elementos do stream se mantém intactos
    // Podia ter metido logo um filter() e varria os pares mais fácil xD
    // Note que poderíamos implementar o Consumer direto no forEach().
  }
}
