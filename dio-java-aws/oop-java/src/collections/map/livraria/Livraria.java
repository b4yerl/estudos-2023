package collections.map.livraria;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Livraria {
  Map<String, Livro> livros;

  public Livraria() {
    livros = new HashMap<>();
  }

  public void adicionarLivro(String isbn, Livro l) {
    this.livros.put(isbn, l);
  }
  public void removerLivro(String t) {
    for (Map.Entry<String, Livro> l : this.livros.entrySet()) {
      if(l.getValue().getTitulo().equals(t)) {
        this.livros.remove(l.getKey());
        break;
      }
    }
  }
  public void ordenarPorPreco() {
    Collection<Livro> l = this.livros.values();
    List<Livro> livroLista = new ArrayList<>(l);
    Collections.sort(livroLista);
    System.out.println(livroLista);
  }
}
