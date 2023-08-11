package collections.list.tasklist;

import java.util.List;

public class TaskListTestDrive {
  public static void main(String[] args) {
    TaskList t = new TaskList();

    t.addTask("passar o café");
    t.addTask("varrer a casa");
    t.addTask("tirar o lixo");

    t.removeTask("varrer a casa");

    System.out.println(t.totalTasks());
    List<String> tNames = t.tasksNames();
    for (String s : tNames) {
      System.out.println(s);
    }
  }
}
