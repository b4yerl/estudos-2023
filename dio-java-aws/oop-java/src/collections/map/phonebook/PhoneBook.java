package collections.map.phonebook;

import java.util.HashMap;
import java.util.Map;

public class PhoneBook {
  Map<String, String> contacts;

  public PhoneBook() {
    contacts = new HashMap<>();
  }

  public void addContact(String name, String phoneNumber) {
    this.contacts.put(name, phoneNumber);
  }
  public void removeContact(String name) {
    this.contacts.remove(name);
  }
  public void getContacts() {
    System.out.println(this.contacts);
  }
  public String searchByName(String name) {
    return this.contacts.get(name);
  }
}
