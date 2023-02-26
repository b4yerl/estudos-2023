package br.com.dio.model;

import java.util.Objects;

public class Cat {
    private String name;
    private String color;
    private Integer age;

    // Empty constructor can be also generated with ALT + INS
    public Cat() {}

    public Cat(String name, String color, Integer age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    // Getters and Setters can also be generated with ALT + INS
    public String getName() {
        return name;
    }
    public String getColor() {
        return color;
    }
    public Integer getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cat cat = (Cat) o;
        return Objects.equals(name, cat.name) && Objects.equals(color, cat.color) && Objects.equals(age, cat.age);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, color, age);
    }

    @Override
    public String toString() {
        return "Cat{" +
                "name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", age=" + age +
                '}';
    }
}
