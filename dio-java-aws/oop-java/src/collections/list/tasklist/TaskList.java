package collections.list.tasklist;

import java.util.List;
import java.util.ArrayList;

public class TaskList {
  private List<Task> tasks;

  public TaskList() {
    this.tasks = new ArrayList<>();
  }

  public void addTask(String t) {
    tasks.add(new Task(t));
  }
  public void removeTask(String t) {
    for(Task task : this.tasks) {
      if(task.getName().equals(t)) {
        this.tasks.remove(task);
      }
    }
  }
  public int totalTasks() {
    return this.tasks.size();
  }
  public List<String> tasksNames() {
    List<String> names = new ArrayList<>();
    for(Task t : this.tasks) {
      names.add(t.getName());
    }
    return names;
  }
}
