package com.test.test.repository;

import com.test.test.entity.Test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface TestRepository extends JpaRepository<Test, Integer> {

}
