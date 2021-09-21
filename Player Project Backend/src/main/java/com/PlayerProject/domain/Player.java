package com.PlayerProject.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "player")
public class Player {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int age;
	private int noOfTournaments;
	private String nationality;
//	private String strength;
	
	public Player() {
		super();
	}
	public Player(int id, String name, int age, int noOfTournaments, String nationality) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.noOfTournaments = noOfTournaments;
		this.nationality = nationality;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getNoOfTournaments() {
		return noOfTournaments;
	}
	public void setNoOfTournaments(int noOfTournaments) {
		this.noOfTournaments = noOfTournaments;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	
	
}
	