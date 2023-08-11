package collections.set.phonebook;

import java.util.Objects;

public class Contact {
  private String name;
  private int phoneNumber;

  public Contact(String n, int p) {
    this.name = n;
    this.phoneNumber = p;
  }

  public String getName() {
    return name;
  }
  public int getPhoneNumber() {
    return phoneNumber;
  }

  @Override
  public int hashCode() {
    return Objects.hash(getPhoneNumber());
  }
  @Override
  public boolean equals(Object o) {
    if(this == o) return true;
    if(!(o instanceof Contact contact)) return false;
    return getPhoneNumber() == contact.getPhoneNumber();
  }
}
