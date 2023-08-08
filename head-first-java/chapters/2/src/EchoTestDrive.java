/*
helloooo...
helloooo...
helloooo...
helloooo...
10
 */
public class EchoTestDrive {
  public static void main(String[] args) {
    Echo e1 = new Echo();
    Echo e2 = new Echo();

    int x = 0;

    while(x < 4) {
      e1.hello();
      e1.count++;

      if(x > 0) {
        e2.count++;
      }
      if(x > 1) {
        e2.count += e1.count;
      }

      x++;
    }
    System.out.println(e2.count);
  }
}
