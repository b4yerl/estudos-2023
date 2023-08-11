package collections.map.agenda;

import java.time.LocalDate;

public class AgendaTD {
  public static void main(String[] args) {
    AgendaEventos agenda = new AgendaEventos();

    agenda.adicionarEvento(LocalDate.parse("1998-10-27"), "SuperEstreia", "EU");
    agenda.adicionarEvento(LocalDate.of(2019, 11, 4), "Rock in Rio", "Iron Maiden");
    agenda.adicionarEvento(LocalDate.of(2011, 12, 4), "6 a 1", "CRUZEIRO");
    agenda.adicionarEvento(LocalDate.of(2121, 1, 2), "Bicentenário", "CRUZEIRO");

    agenda.exibirEventos();

    agenda.obterProximoEvento();
  }
}
