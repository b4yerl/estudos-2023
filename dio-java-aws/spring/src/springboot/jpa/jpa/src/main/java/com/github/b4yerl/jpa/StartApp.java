package com.github.b4yerl.jpa;

import com.github.b4yerl.jpa.model.User;
import com.github.b4yerl.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartApp implements CommandLineRunner {
    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) throws Exception {
        User user = new User();

        user.setName("Bayerl");
        user.setUsername("b4yerl");
        user.setPassword("coxinha123");

       // repository.save(user);
        for(User u : repository.findAll()) {
            System.out.println(u);
        }
    }
}
