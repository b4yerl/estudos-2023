package collections.list.sortnumbers;

public class SortTestDrive {
  public static void main(String[] args) {
    SortNumbers sortMachine = new SortNumbers();
    sortMachine.addNumber(5);
    sortMachine.addNumber(2);
    sortMachine.addNumber(6);
    sortMachine.addNumber(2);
    sortMachine.addNumber(9);

    System.out.println(sortMachine.getNumbers());

    sortMachine.ascendingOrder();
    System.out.println(sortMachine.getNumbers());
    sortMachine.descendingOrder();
    System.out.println(sortMachine.getNumbers());
  }
}
