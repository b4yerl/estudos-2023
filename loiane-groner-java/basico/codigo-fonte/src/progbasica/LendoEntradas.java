package progbasica;

import java.util.Scanner;

public class LendoEntradas {
  public static void main(String[] args) {
    // Instancia novo Scanner
    Scanner scan = new Scanner(System.in);

    System.out.print("Insira o seu nome: ");

    // Lê o input do user e fecha o Scanner
    String nome = scan.nextLine();
    scan.close();

    System.out.println("Olá " + nome);
  }
}
