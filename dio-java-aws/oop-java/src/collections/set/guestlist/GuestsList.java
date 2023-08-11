package collections.set.guestlist;

import java.util.HashSet;
import java.util.Set;

public class GuestsList {
  private Set<Guest> myGuests;

  public GuestsList() {
    myGuests = new HashSet<>();
  }

  public void addGuest(String n, int in) {
    this.myGuests.add(new Guest(n, in));
  }
  public void removeGuestByInviteNumber(int in) {
    Guest seeYa = null;
    for (Guest guest : myGuests) {
      if(guest.getInviteNumber() == in) {
        // this.myGuests.remove(guest);
        seeYa = guest;
        break;
      }
    }
    this.myGuests.remove(seeYa);
  }
  public int totalGuests() {
    return this.myGuests.size();
  }
  public void guestsNames() {
    for (Guest guest : myGuests) {
      System.out.println(guest);
    }
  }
}
