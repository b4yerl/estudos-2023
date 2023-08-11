package collections.map.livraria;

public class Livro implements Comparable<Livro>{
  private String titulo;
  private String autor;
  private double preco;

  public Livro(String t, String a, double p) {
    this.titulo = t;
    this.autor = a;
    this.preco = p;
  }

  public String getAutor() {
    return autor;
  }
  public double getPreco() {
    return preco;
  }
  public String getTitulo() {
    return titulo;
  }

  @Override
  public String toString() {
    return this.getTitulo();
  }
  @Override
  public int compareTo(Livro l) {
    return Double.compare(getPreco(), l.getPreco());
  }
}
