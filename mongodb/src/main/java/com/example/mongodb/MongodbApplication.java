package com.example.mongodb;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MongodbApplication implements CommandLineRunner {
	@Autowired
	private PersonRepository personRepository;
	@Autowired
	private AccountRepository accountRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(MongodbApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Removing all data...");
		personRepository.deleteAll();
		System.out.println("Data creation started...");
		Account ac0 = new Account(1.99);
		Account ac1 = new Account(0.0);
		accountRepository.save(ac0);
		accountRepository.save(ac1);
		personRepository.save(new Person("John Doe", 22, Arrays.asList(new Account[]{ac0,ac1})));
		personRepository.save(new Person("Mary Doe", 20, Arrays.asList(new Account[]{ac0})));
		System.out.println("Data creation complete...");
		long count = personRepository.count();
		System.out.println("Number of documents: " + count);
	}

}
