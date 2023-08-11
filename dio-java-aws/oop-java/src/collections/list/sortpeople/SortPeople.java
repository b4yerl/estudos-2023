package collections.list.sortpeople;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class SortPeople {
  private List<People> peeps;

  public SortPeople() {
    this.peeps = new ArrayList<>();
  }

  public void addPeople(String n, int a, double h) {
    this.peeps.add(new People(n, a, h));
  }
  public void sortByAge() {
    Collections.sort(this.peeps);;
  }
  public void sortByHeight() {
    Collections.sort(this.peeps, new HeightComparator());
  }
  public List<String> getPeeps() {
    List<String> p = new ArrayList<>();
    for(People people : this.peeps) {
      p.add(people.getName());
    }
    return p;
  }
}
