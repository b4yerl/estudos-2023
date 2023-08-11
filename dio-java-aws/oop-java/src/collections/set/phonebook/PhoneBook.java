package collections.set.phonebook;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class PhoneBook {
  private Set<Contact> contacts;

  public PhoneBook() {
    contacts = new HashSet<>();
  }

  public void addContact(String n, int p) {
    contacts.add(new Contact(n, p));
  }
  public void displayContacts() {
    for (Contact contact : contacts) {
      System.out.println(contact);
    }
  }
  public List<Contact> searchByName(String n) {
    List<Contact> results = new ArrayList<>();
    for (Contact c : this.contacts) {
      if(c.getName().equals(n)) results.add(c);
    }
    return results;
  }
  
}
