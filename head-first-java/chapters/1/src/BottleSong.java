public class BottleSong {
  public static void main(String[] args) {
    int totalBottles = 10;
    while(totalBottles > 0) {
      for(int i = 0; i < 2; i++) {
        System.out.print(totalBottles);
        if(totalBottles > 1) {
          System.out.println(" green bottles hanging on the wall");
        } 
        else {
          System.out.println(" green bottle hanging on the wall");
        }
      }
      System.out.println("And if one green bottle should accidentally fall");
      System.out.print("There'll be ");
      totalBottles--;
      if (totalBottles > 0) {
        System.out.println(totalBottles + " green bottles hanging on the wall");
      }
      else {
        System.out.println("no green bottles hanging on the wall");
      }
      System.out.println("");
    }
  }
}
