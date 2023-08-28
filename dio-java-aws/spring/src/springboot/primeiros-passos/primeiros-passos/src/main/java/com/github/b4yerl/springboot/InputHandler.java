package com.github.b4yerl.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class InputHandler {
    @Autowired
    private Scanner scanner;

    public String getUserInput() {
        return scanner.nextLine();
    }
}
