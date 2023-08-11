package collections.set.studentslist;

import java.util.Comparator;

public class ScoreComparator implements Comparator<Student>{
  @Override
  public int compare(Student s1, Student s2) {
    int result = Double.compare(s1.getScore(), s2.getScore());
    if(result == 0) return s1.compareTo(s2);
    return result;
  }
}
