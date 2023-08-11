package collections.set.studentslist;

import java.util.Objects;

public class Student implements Comparable<Student>{
  private String name;
  private String id;
  private double score;

  public Student(String n, String id, double s) {
    this.name = n;
    this.id = id;
    this.score = s;
  }

  public String getName() {
    return name;
  }
  public String getId() {
    return id;
  }
  public double getScore() {
    return score;
  }

  @Override
  public String toString() {
    return getName();
  }
  @Override
  public int hashCode() {
    return Objects.hash(this.getId());
  }
  @Override
  public boolean equals(Object o) {
    if(this == o) return true;
    if(!(o instanceof Student s)) return false;
    return this.getId() == s.getId();
  }
  @Override
  public int compareTo(Student s) {
    return this.getName().compareTo(s.getName());
  }
}
