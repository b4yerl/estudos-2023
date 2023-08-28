package com.github.b4yerl.psql.repository;

import com.github.b4yerl.psql.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
