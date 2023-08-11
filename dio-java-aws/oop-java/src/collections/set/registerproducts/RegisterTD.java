package collections.set.registerproducts;

public class RegisterTD {
  public static void main(String[] args) {
    RegisterProducts reg = new RegisterProducts();

    reg.addProduct("Lagunitas IPA", 4856, 10, 5.99);
    reg.addProduct("Colorado Appia", 85465, 2, 12.99);
    reg.addProduct("Spaten", 453218, 6, 3.39);

    System.out.println(reg.displayProductsByName());
    System.out.println("-----------------------");
    System.out.println(reg.displayProductsByPrice());
  }
}
