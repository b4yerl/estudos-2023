package collections.comparableXcomparator;

public class Driver implements Comparable<Driver>{
  private String name;
  private String country;

  public Driver(String name, String country) {
    this.name = name;
    this.country = country;
  }

  public String getName() {
    return this.name;
  }
  public String getCountry() {
    return this.country;
  }

  public int compareTo(Driver driver2) {
    return this.name.compareTo(driver2.name);
  }
}
