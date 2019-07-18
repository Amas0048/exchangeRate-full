package com.example.demo.currency;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//author = Amas;
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Currency {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	private String country;
	private String name;
	private String code;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	public Currency(String country, String name, String code) {
		this.country = country;
		this.name = name;
		this.code = code;
	}
	
	public Currency() {
		
	}
	
	
	
	
	
	
	

}
