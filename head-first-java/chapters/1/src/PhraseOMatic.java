public class PhraseOMatic {
  public static void main(String[] args) {
    String[] wordListOne = {"cabuloso", "imparavel", "impiedoso", "sanguinolento", "nefasto", "gigantesco", "colossal", "absurdo"};
    String[] wordListTwo = {"insaciavel", "aterrorizante", "encantador", "maquiavélico", "soberbo", "maior de Minas", "monstruoso"};
    String[] wordListThree = {"Cruzeiro", "CRUZEIRO ESPORTE CLUBE", "Cruzeirão", "ZEEEEEIIIRROOOO", "Raposão"};

    int firstListLength = wordListOne.length;
    int secondListLength = wordListTwo.length;
    int thirdListLength = wordListThree.length;

    java.util.Random randomNumberGenerator = new java.util.Random();
    int rand1 = randomNumberGenerator.nextInt(firstListLength);
    int rand2 = randomNumberGenerator.nextInt(secondListLength);
    int rand3 = randomNumberGenerator.nextInt(thirdListLength);

    String phrase = wordListOne[rand1] + " " + wordListTwo[rand2] + " " + wordListThree[rand3];
    System.out.println("É o " + phrase + "!!!");
  }
}
