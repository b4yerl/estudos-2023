package collections.map.agenda;

public class Evento {
  private String nome;
  private String atracao;

  public Evento(String n, String a) {
    this.nome = n;
    this.atracao = a;
  }

  public String getNome() {
    return nome;
  }
  public String getAtracao() {
    return atracao;
  }

  @Override
  public String toString() {
    return getNome() + " / " + getAtracao();
  }
}
