package collections.set.registerproducts;

import java.util.Comparator;

public class PriceComparator implements Comparator<Product>{

  @Override
  public int compare(Product p1, Product p2) {
    int result = Double.compare(p1.getPrice(), p2.getPrice()); 
    if(result == 0) return p1.compareTo(p2);
    return result;
  }
  
}
