public class GuessPlayer {
  private int currentNumber;
  private int idNumber;

  public GuessPlayer(int id) {
    this.idNumber = id;
  }

  public int getIdNumber() {
    return this.idNumber;
  }

  public int getCurrentNumber() {
    return this.currentNumber;
  }

  public void guess() {
    this.currentNumber = (int) (Math.random() * 10);
  }
}
