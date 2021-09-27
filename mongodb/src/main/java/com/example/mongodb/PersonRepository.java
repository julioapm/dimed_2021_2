package com.example.mongodb;

import org.springframework.data.repository.CrudRepository;


public interface PersonRepository extends CrudRepository<Person, String>{
}
