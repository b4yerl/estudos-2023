package collections.list.sortnumbers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortNumbers {
  private List<Integer> numbers;

  public SortNumbers() {
    this.numbers = new ArrayList<>();
  }

  public void addNumber(int n) {
    this.numbers.add(n);
  }
  public void ascendingOrder() {
    Collections.sort(this.numbers);
  }
  public void descendingOrder() {
    Collections.sort(this.numbers, Collections.reverseOrder());
  }
  public List<Integer> getNumbers() {
    return numbers;
  }
}
