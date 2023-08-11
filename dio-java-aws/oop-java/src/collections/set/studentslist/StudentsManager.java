package collections.set.studentslist;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class StudentsManager {
  private Set<Student> students;

  public StudentsManager() {
    students = new HashSet<>();
  }

  public void addStudent(Student s) {
    students.add(s);
  }
  public void removeStudent(Student s) {
    for (Student student : students) {
      if(student.equals(s)) this.students.remove(student);
    }
  }
  public Set<Student> getStudents() {
    return this.students;
  }
  public Set<Student> getStudentsByName() {
    return new TreeSet<>(this.students);
  }
  public Set<Student> getStudentsByScore() {
    Set<Student> results = new TreeSet<>(new ScoreComparator());
    results.addAll(this.students);

    return results;
  }
}
