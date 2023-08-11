package collections.set.uniquewords;

public class UniqueWordsTD {
  public static void main(String[] args) {
    UniqueWords words = new UniqueWords();

    words.addWord("cruzeiro");
    words.addWord("palestra");
    words.addWord("palestra");
    words.addWord("cabuloso");

    words.removeWord("cabuloso");
    System.out.println(words.doesItContains("palestra"));
    words.printWords();
  }
}
