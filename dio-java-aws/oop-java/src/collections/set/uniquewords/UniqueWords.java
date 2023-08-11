package collections.set.uniquewords;

import java.util.HashSet;
import java.util.Set;

public class UniqueWords {
  Set<String> words;

  public UniqueWords() {
    this.words = new HashSet<>();
  }

  public void addWord(String w) {
    this.words.add(w);
  }
  public void removeWord(String w) {
    String killIt = null;
    for (String string : words) {
      if(string.equals(w)) killIt = string;
      break;
    }
    this.words.remove(killIt);
  }
  public boolean doesItContains(String w) {
    return this.words.contains(w);
  }
  public void printWords() {
    for (String string : words) {
      System.out.println(string);
    }
  }
}
