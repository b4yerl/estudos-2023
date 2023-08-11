package collections.list.sortpeople;

import java.util.Comparator;

public class HeightComparator implements Comparator<People>{
  @Override
  public int compare(People p1, People p2) {
    int result = Double.compare(p1.getHeight(), p2.getHeight());
    if(result == 0) {
      return p1.compareTo(p2);
    }
    return result;
  }
}
