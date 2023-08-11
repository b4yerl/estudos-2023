package collections.set.studentslist;

public class StudentsManagerTD {
  public static void main(String[] args) {
    StudentsManager stdmng = new StudentsManager();

    stdmng.addStudent(new Student("Alex", "001", 8.54));
    stdmng.addStudent(new Student("Victor", "004", 6.42));
    stdmng.addStudent(new Student("Meg", "002", 9.24));
    stdmng.addStudent(new Student("Ana", "003", 4.48));
    stdmng.addStudent(new Student("TEST", "003", 8.54));

    System.out.println(stdmng.getStudents());
    System.out.println("-------------");
    System.out.println(stdmng.getStudentsByName());
    System.out.println("----------------");
    System.out.println(stdmng.getStudentsByScore());
  }
}
