import java.util.ArrayList;

public class GuessGame {
  private int numberOfRounds = 1;
  private int currentNumber = 0;
  private int numberOfPlayers;

  public GuessGame(int players) {
    this.numberOfPlayers = players;
  }

  public void startGame() {
    boolean hasWinner = false;
    ArrayList<GuessPlayer> playersList = new ArrayList<GuessPlayer>();

    for(int i = 0; i < this.numberOfPlayers; i++) {
      playersList.add(i, new GuessPlayer(i + 1));
    } 

    while(!hasWinner) {
      this.currentNumber = (int) (Math.random() * 10);
      
      System.out.println("The current number is " + this.currentNumber);

      for (GuessPlayer player : playersList) {
        player.guess();

        System.out.println("Player " + player.getIdNumber() + " guessed " + player.getCurrentNumber());

        if(player.getCurrentNumber() == this.currentNumber) {
          hasWinner = true;
          System.out.println("Player " + player.getIdNumber() + " guessed the right number!");
        }
      }

      if(hasWinner) {
        break;
      }
      else {
        this.numberOfRounds++;
        System.out.println("No one got it right, let's go for round " + this.numberOfRounds);
      }
    }
    
  }
}