package one.digitalinnovation;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Pessoa {
  private LocalDate dataNascimento;
  public Pessoa(LocalDate nascimento) {
    this.dataNascimento = nascimento;
  }

  public long getIdade() {
    return ChronoUnit.YEARS.between(dataNascimento, LocalDate.now());
  }

  public boolean isMaiorDeIdade() {
    return getIdade() >= 18;
  }
}
