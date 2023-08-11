package collections.list.shoppingcart;

public class ShoppingCartTestDrive {
  public static void main(String[] args) {
    ShoppingCart cart = new ShoppingCart();

    cart.addItem("café", 10, 2);
    cart.addItem("desodorante", 15, 1);
    cart.addItem("Patagonia IPA", 5.29, 6);
    cart.addItem("café", 10, 1);

    cart.removeItem("desodorante");
    System.out.println(cart.totalPrice());
    cart.displayItems();
  }
}
