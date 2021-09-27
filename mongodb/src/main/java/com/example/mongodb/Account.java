package com.example.mongodb;

public class Account {
	private String id;
	private double value;
	public String getId() {
		return id;
	}
	public double getValue() {
		return value;
	}
	public Account(double value) {
		this.value = value;
	}
	@Override
	public String toString() {
		return "Account [id=" + id + ", value=" + value + "]";
	}
}
