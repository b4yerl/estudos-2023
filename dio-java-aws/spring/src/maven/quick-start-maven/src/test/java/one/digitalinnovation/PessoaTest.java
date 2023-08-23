package one.digitalinnovation;

import java.time.LocalDate;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class PessoaTest {
  @Test
  void deveValidarMaiorIdade() {
    Pessoa p = new Pessoa(LocalDate.of(2007, 10, 29));

    Assertions.assertFalse(p.isMaiorDeIdade());
  }

  @Test
  void shouldReturnRightAge() {
    Pessoa p = new Pessoa(LocalDate.of(1998, 3, 8));

    Assertions.assertEquals(p.getIdade(), 25l);
  }
}
