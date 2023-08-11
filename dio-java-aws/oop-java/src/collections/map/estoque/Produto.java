package collections.map.estoque;

public class Produto {
  private String nome;
  private double valor;
  private int quantidade;

  public Produto(String n, double v, int q) {
    this.nome = n;
    this.valor = v;
    this.quantidade = q;
  }

  public String getNome() {
    return nome;
  }
  public double getValor() {
    return valor;
  }
  public int getQuantidade() {
    return quantidade;
  }

  @Override
  public String toString() {
    return this.getNome();
  }
}
