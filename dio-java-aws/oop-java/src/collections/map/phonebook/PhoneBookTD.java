package collections.map.phonebook;

public class PhoneBookTD {
  public static void main(String[] args) {
    PhoneBook agenda = new PhoneBook();

    agenda.addContact("Rafael", "111-111-111");
    agenda.addContact("Bruno", "999-999-999");
    agenda.addContact("Marlon", "333-333-333");
    agenda.addContact("Luciano", "444-444-444");

    agenda.removeContact("Bruno");

    System.out.println(agenda.searchByName("Marlon"));

    agenda.getContacts();
  }
}
