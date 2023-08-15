/*
 * A ideia é fornecer uma forma mais segura para tratar casos de NullPointerException
 * O Optional<T> permite o encapsulamento de um valor que pode ser nulo.
 * Dessa maneira umcódigo que deseje acessar este objeto deve fazer uma verificação explícita.
 */
package stream;

import java.util.Optional;

public class OptionalExample {
  public static void main(String[] args) {
    // Cria um Optional<T> com o valor forneceido, caso seja nulo dispara um NPE
    Optional<String> optionalValue = Optional.of("x");
    System.out.println(optionalValue.get());

    // Cria o Optional<T> contendo o valor, que aqui pode ser nulo:
    String secretNull = null;
    optionalValue = Optional.ofNullable(secretNull);
    System.out.println(optionalValue.isPresent());

    // Retorna um Optional<T> vazio
    optionalValue = Optional.empty();
    System.out.println(optionalValue.orElse("Tá vazio chefe"));
    
    // E podemos usar um Supplier<T> pra fornecer a saída, ou um erro msm kkk
    System.out.println(optionalValue.orElseGet(() -> "Retornando do Supplier"));
    System.out.println(optionalValue.orElseThrow(() -> new NullPointerException("kkkkkkk")));
  }
}
