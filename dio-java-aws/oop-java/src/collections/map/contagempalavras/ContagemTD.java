package collections.map.contagempalavras;

public class ContagemTD {
  public static void main(String[] args) {
    ContagemPalavras contador = new ContagemPalavras();

    contador.adicionarPalavra("Teste");
    contador.adicionarPalavra("Teste");
    contador.adicionarPalavra("null");
    contador.adicionarPalavra("null");
    contador.adicionarPalavra("null");
    contador.adicionarPalavra("cruzeiro");

    contador.removerPalavra("null");
    contador.exibirPalavras();
    System.out.println(contador.palavraMaisFrequente());
  }
}
