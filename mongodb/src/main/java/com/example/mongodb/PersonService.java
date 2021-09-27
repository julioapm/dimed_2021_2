package com.example.mongodb;

import org.springframework.dao.DataAccessException;


public interface PersonService {
	Person savePerson(Person person) throws DataAccessException;
	Iterable<Person> findAllPerson() throws DataAccessException;
}
