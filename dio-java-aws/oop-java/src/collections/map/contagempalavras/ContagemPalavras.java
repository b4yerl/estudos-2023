package collections.map.contagempalavras;

import java.util.HashMap;
import java.util.Map;

public class ContagemPalavras {
  Map<String, Integer> contador;

  public ContagemPalavras() {
    contador = new HashMap<>();
  }

  public void adicionarPalavra(String p) {
    if(this.contador.containsKey(p)) {
      this.contador.replace(p, this.contador.get(p) + 1);
    }
    else {
      this.contador.put(p, 1);
    }
  }

  public void removerPalavra(String p) {
    if(this.contador.containsKey(p)) {
      this.contador.remove(p);
    }
  }
  public void exibirPalavras() {
    System.out.println(this.contador);
  }
  public String palavraMaisFrequente() {
    Integer max = Integer.MIN_VALUE;
    String palavra = null;

    for(Map.Entry<String, Integer> par : this.contador.entrySet()) {
      if(par.getValue() > max) {
        max = par.getValue();
        palavra = par.getKey();
      }
    }

    return palavra;
  }
}
