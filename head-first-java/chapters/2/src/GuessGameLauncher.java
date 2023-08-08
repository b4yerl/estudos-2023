public class GuessGameLauncher {
  public static void main(String[] args) {
    System.out.println("--STARTING GAME--");
    GuessGame game = new GuessGame(3);
    game.startGame();
    System.out.println("--GAME OVER--");
  }
}
