package collections.list.sortpeople;

public class People implements Comparable<People> {
  private String name;
  private int age;
  private double height;

  public People(String n, int a, double h) {
    this.name = n;
    this.age = a;
    this.height = h;
  }

  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public double getHeight() {
    return height;
  }

  @Override
  public int compareTo(People p) {
    return Integer.compare(this.age, p.getAge());
  }
}
