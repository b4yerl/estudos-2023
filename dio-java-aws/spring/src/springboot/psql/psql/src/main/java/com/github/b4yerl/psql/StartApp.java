package com.github.b4yerl.psql;

import com.github.b4yerl.psql.model.User;
import com.github.b4yerl.psql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartApp implements CommandLineRunner {
    @Autowired
    private UserRepository repo;

    @Override
    public void run(String... args) throws Exception {
        User user = new User();

        user.setName("Guilherme Bayerl");
        user.setUsername("b4yerl");
        user.setPassword("coxinha123");

        repo.save(user);

        for(User u : repo.findAll()) {
            System.out.println(u);
        }
    }
}
