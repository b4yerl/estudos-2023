package stream;

import java.util.Arrays;
import java.util.List;

public class Desafio {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);

    // Desafio 1
    numbers.stream().sorted().forEach(System.out::println);
    System.out.println("------------------------------------");

    // Desafio 2
    numbers.stream().filter(n -> n % 2 == 0).reduce(Integer::sum)
            .ifPresent(n -> System.out.println(n));
    System.out.println("------------------------------------");
    
    // Desafio 3
    boolean arePositive = numbers.stream().allMatch(n -> n > 0);
    System.out.println(arePositive);
    System.out.println("----------------------------------");

    // Desafio 5
    List<Integer> greaterThan5 = numbers.stream().filter(n -> n > 5).toList();
    greaterThan5.stream().reduce(Integer::sum).map(n -> n / greaterThan5.size()).ifPresent(n -> System.out.println(n));
  }
}
