package collections.list.shoppingcart;

public class Item {
  private String name;
  private double price;
  private int quantity;

  public Item(String n, double p, int q) {
    this.name = n;
    this.price = p;
    this.quantity = q;
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
    this.quantity += quantity;
  }
}
