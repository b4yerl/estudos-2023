package collections.set.guestlist;

public class GuestTD {
  public static void main(String[] args) {
    GuestsList l = new GuestsList();

    l.addGuest("Ronaldo", 9);
    l.addGuest("Rivaldo", 10);
    l.addGuest("Ronaldinho", 11);
    l.addGuest("Caça-Rato", 9);

    System.out.println(l.totalGuests());
    l.removeGuestByInviteNumber(10);
    l.guestsNames();
  }
}
