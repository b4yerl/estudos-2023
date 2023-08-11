package collections.list.bookcatalog;

import java.util.ArrayList;
import java.util.List;

public class Catalog {
  List<Book> books;

  public Catalog() {
    books = new ArrayList<>();
  }

  public void addBook(Book b) {
    this.books.add(b);
  }
  public List<Book> searchByAuthor(String a) {
    List<Book> results = new ArrayList<>();

    for (Book book : this.books) {
      if(book.getAuthor().equalsIgnoreCase(a)) {
        results.add(book);
      }
    }

    return results;
  }
  public List<Book> searchByYearInterval(int min, int max) {
    List<Book> results = new ArrayList<>();

    for (Book book : this.books) {
      if(book.getPublishingYear() >= min && book.getPublishingYear() <= max) {
        results.add(book);
      }
    }
    return results;
  }
  public Book searchByTitle(String t) {
    for(Book book : this.books) {
      if(book.getTitle().equalsIgnoreCase(t)) {
        return book;
      }
    }
    return null;
  }
}
