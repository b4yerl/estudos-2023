package collections.comparableXcomparator;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

public class CompareTestDrive {
  public static void main(String[] args) {
    List<Driver> ninetiesChampions = new ArrayList<>();

    ninetiesChampions.add(new Driver("Ayrton Senna", "Brazil"));
    ninetiesChampions.add(new Driver("Nigel Mansell", "United Kingdom"));
    ninetiesChampions.add(new Driver("Alain Prost", "France"));
    ninetiesChampions.add(new Driver("Michael Schumacher", "Germany"));
    ninetiesChampions.add(new Driver("Damon Hill", "United Kingdom"));
    ninetiesChampions.add(new Driver("Jacques Villeneuve", "Canada"));
    ninetiesChampions.add(new Driver("Mika Hakkinen", "Finland"));

    Collections.sort(ninetiesChampions);

    for(Driver d : ninetiesChampions) {
      System.out.println(d.getName());
    }

    System.out.println("------------------------------");

    Collections.sort(ninetiesChampions, new CompareCountry());

    for(Driver d : ninetiesChampions) {
      System.out.println(d.getName());
    }
  }

}
