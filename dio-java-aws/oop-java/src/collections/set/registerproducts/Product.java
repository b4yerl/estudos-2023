package collections.set.registerproducts;

import java.util.Objects;

public class Product implements Comparable<Product>{
  private String name;
  private int cod;
  private int quantity;
  private double price;

  public Product(String n, int q, int c, double p) {
    this.name = n;
    this.price = p;
    this.quantity = q;
    this.cod = c;
  }

  public int getCod() {
    return cod;
  }
  public String getName() {
    return name;
  }
  public double getPrice() {
    return price;
  }
  public int getQuantity() {
    return quantity;
  }
  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  @Override
  public int hashCode() {
    return Objects.hash(getCod());
  }
  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Product p)) return false;
    return (this.getCod() == p.getCod());
  }
  @Override
  public int compareTo(Product p) {
    return this.getName().compareTo(p.getName());
  }
  @Override
  public String toString() {
    return getName();
  }
}
