package collections.set.registerproducts;

import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

public class RegisterProducts {
  private Set<Product> goods;

  public RegisterProducts() {
    this.goods = new HashSet<>();
  }

  public void addProduct(String n, int c, int q, double p) {
    this.goods.add(new Product(n, q, c, p));
  }
  public Set<Product> displayProductsByName() {
    Set<Product> result = new TreeSet<>(this.goods);
    return result;
  }
  public Set<Product> displayProductsByPrice() {
    Set<Product> result = new TreeSet<>(new PriceComparator());
    result.addAll(this.goods);

    return result;
  }
}
