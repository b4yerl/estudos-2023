package collections.map.agenda;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class AgendaEventos {
  Map<LocalDate, Evento> agenda;

  public AgendaEventos() {
    agenda = new HashMap<>();
  }

  public void adicionarEvento(LocalDate d, String n, String a) {
    Evento e = new Evento(n, a);
    this.agenda.put(d, e);
  }

  public void exibirEventos() {
    Map<LocalDate, Evento> ordenado = new TreeMap<>(this.agenda);

    System.out.println(ordenado);
  }

  public void obterProximoEvento() {
    Map<LocalDate, Evento> ordenado = new TreeMap<>(this.agenda);
    for (Map.Entry<LocalDate, Evento> e : ordenado.entrySet()) {
      if(e.getKey().isAfter(LocalDate.now())) {
        System.out.println(e);
        break;
      }
      
    }
  }
}
