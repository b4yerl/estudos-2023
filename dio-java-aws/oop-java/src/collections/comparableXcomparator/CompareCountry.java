package collections.comparableXcomparator;
import java.util.Comparator;

public class CompareCountry implements Comparator<Driver> {
  public int compare(Driver x, Driver y) {
    int result = x.getCountry().compareTo(y.getCountry());
    
    if(result == 0) {
      return x.compareTo(y);
    }
    else {
      return result;
    }
  }  
}
