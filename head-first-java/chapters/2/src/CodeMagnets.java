/*
bang bang ba-bang
ding ding da-ding
 */

class DrumKit {
  boolean topHat = true;
  boolean snare = true;

  void playSnare() {
    System.out.println("bang bang ba-bang");
  }

  void playTopHat() {
    System.out.println("ding ding da-ding");
  }
}

public class CodeMagnets {
  public static void main(String[] args) {
    DrumKit d = new DrumKit();
    
    d.playSnare();
    d.playTopHat();

    d.snare = false;

    if(d.snare) {
      d.playSnare();
    }
  }
}
