package com.example.mongodb;

import java.util.Collections;
import java.util.List;

//Convensão de mapeamento:
//Coleção: person
//Identificador: driver do MongoDB irá usar um campo mapeado via @Id ou pelo nome de campo "id" com valor automaticamente criado.
public class Person {
	private String id;
	private String name;
	private int age;
	private List<Account> accounts;
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	public List<Account> getAccounts() {
		return accounts;
	}
	public Person(String name, int age, List<Account> accounts) {
		this.name = name;
		this.age = age;
		this.accounts = accounts;
	}
	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", age=" + age + "]";
	}
}
