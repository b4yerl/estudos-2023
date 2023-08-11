package collections.map.dict;

import java.util.HashMap;
import java.util.Map;

public class Dicionario {
  Map<String, String> verbetes;

  public Dicionario() {
    verbetes = new HashMap<>();
  }

  public void adicionarVerbete(String palavra, String significado) {
    this.verbetes.put(palavra, significado);
  }
  public void removerPalavra(String palavra) {
    this.verbetes.remove(palavra);
  }
  public void exibirPalavras() {
    System.out.println(this.verbetes);
  }
  public String pesquisarPalavra(String palavra) {
    return this.verbetes.get(palavra);
  }
}
