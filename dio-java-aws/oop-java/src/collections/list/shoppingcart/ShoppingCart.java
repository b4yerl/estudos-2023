package collections.list.shoppingcart;

import java.util.List;
import java.util.ArrayList;

public class ShoppingCart {
  private List<Item> items;

  public ShoppingCart() {
    items = new ArrayList<>();
  }

  public void addItem(String n, double p, int q) {
    boolean isThere = false;
    for (Item item : items) {
      if(item.getName().equals(n)) {
        item.setQuantity(q);
        isThere = true;
      }
    }

    if(!isThere) {
      items.add(new Item(n, p, q));
    }
  }
  public void removeItem(String n) {
    for (Item item : items) {
      if(item.getName().equals(n)) {
        this.items.remove(item);
      }
    }
  }
  public double totalPrice() {
    double total = 0;
    for (Item item : items) {
      total += item.getPrice() * item.getQuantity();
    }
    return total;
  }
  public void displayItems() {
    for (Item item : items) {
      System.out.println(item.getName());
    }
  } 
}
