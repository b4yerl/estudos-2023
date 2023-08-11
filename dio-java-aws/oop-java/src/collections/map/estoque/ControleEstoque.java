package collections.map.estoque;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class ControleEstoque {
  Map<Long, Produto> estoque;

  public ControleEstoque() {
    this.estoque = new HashMap<>();
  }

  public void adicionarProduto(String n, double v, int q, long cod) {
    Produto produto = new Produto(n, v, q);
    this.estoque.put(cod, produto);
  }
  public void exibirProdutos() {
    System.out.println(this.estoque);
  }
  public double valorTotalEmEstoque() {
    double total = 0;
    
    Collection<Produto> prods = this.estoque.values();
    for (Produto produto : prods) {
      total += produto.getValor() * produto.getQuantidade();
    }
    
    return total;
  }
  public Produto getProdutoMaisCaro() {
    Produto max = new Produto(null, 0, 0);
    Collection<Produto> prods = this.estoque.values();

    for (Produto produto : prods) {
      if(produto.getValor() > max.getValor()) {
        max = produto;
      }
    }

    return max;
  }
}
