package com.github.b4yerl.springboot;

import org.springframework.stereotype.Component;

@Component
public class Calc {
    public int somar(int x, int y) {
        return x + y;
    }
}
