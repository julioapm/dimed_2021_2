package com.example.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {
	private PersonRepository repository;

	@Autowired
	public PersonServiceImpl(PersonRepository repository) {
		this.repository = repository;
	}

	@Override
	public Person savePerson(Person person) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Person> findAllPerson() throws DataAccessException {
		return repository.findAll();
	}

}
