package collections.list.bookcatalog;

public class Book {
  private String title;
  private String author;
  private int publishingYear;

  public Book(String t, String a, int y) {
    this.title = t;
    this.author = a;
    this.publishingYear = y;
  }

  public String getTitle() {
    return title;
  }
  public String getAuthor() {
    return author;
  }
  public int getPublishingYear() {
    return publishingYear;
  }

  @Override
  public String toString() {
    return "Title: " + this.title +
            " Author: " + this.author;
  }
}
