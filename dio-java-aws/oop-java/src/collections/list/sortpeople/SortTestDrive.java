package collections.list.sortpeople;

public class SortTestDrive {
  public static void main(String[] args) {
    SortPeople sortMachine = new SortPeople();
    sortMachine.addPeople("Guilherme", 24, 1.75);
    sortMachine.addPeople("Random", 50, 1.80);
    sortMachine.addPeople("Garlic Guy", 24, 1.69);

    sortMachine.sortByAge();
    System.out.println(sortMachine.getPeeps());

    System.out.println("------------");

    sortMachine.sortByHeight();
    System.out.println(sortMachine.getPeeps());
  }
}
