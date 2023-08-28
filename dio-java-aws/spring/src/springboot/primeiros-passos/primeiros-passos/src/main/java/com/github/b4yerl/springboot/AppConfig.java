package com.github.b4yerl.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Configuration
public class AppConfig {
    @Bean
    public Scanner scanner() {
        return new Scanner(System.in);
    }
    @Bean
    public List<Contato> contatos() {
        return new ArrayList<>();
    }
}
