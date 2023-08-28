package com.github.b4yerl.jpa.repository;

import com.github.b4yerl.jpa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

public interface UserRepository extends JpaRepository<User, Integer> {
}
