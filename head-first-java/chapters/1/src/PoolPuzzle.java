/*
a noise
annoys
an oyster
 */
public class PoolPuzzle {
  public static void main(String[] args) {
    int x = 0;
    while(x < 3) {
      System.out.print("a");
      if(x < 1) {
        System.out.print(" ");
      }
      x = x + 1;
      if(x > 0) {
        System.out.print("n");
      }
      if(x == 1) {
        System.out.print("oise");
      }
      if(x > 1) {
        System.out.print("noys");
        x = x + 2;
      }
      System.out.println();
    }
    System.out.print("an");
    System.out.println(" oyster");
  }
}
