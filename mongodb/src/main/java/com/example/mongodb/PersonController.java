package com.example.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
	@Autowired
	private PersonService service;
	@GetMapping("/persons")
	public Iterable<Person> getAll() {
		return service.findAllPerson();
	}

}
