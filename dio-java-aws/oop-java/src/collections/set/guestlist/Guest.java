package collections.set.guestlist;

import java.util.Objects;

public class Guest {
  private String name;
  private int inviteNumber;

  public Guest(String n, int i) {
    this.name = n;
    this.inviteNumber = i;
  }

  public String getName() {
    return name;
  }
  public int getInviteNumber() {
    return inviteNumber;
  }

  @Override
  public String toString() {
    return "Name: " + this.getName() +
            ", " + "Invite Number: " + this.getInviteNumber();
  }
  @Override
  public int hashCode() {
    return Objects.hash(getInviteNumber());
  }
  @Override
  public boolean equals(Object o) {
    if(this == o) return true;
    if (!(o instanceof Guest guest)) return false;
    return getInviteNumber() == guest.getInviteNumber();
  }
}