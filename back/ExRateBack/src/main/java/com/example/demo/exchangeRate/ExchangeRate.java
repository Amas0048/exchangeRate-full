package com.example.demo.exchangeRate;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.example.demo.currency.Currency;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//Author = Amas
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class ExchangeRate {
	@Id
	@GeneratedValue( strategy = GenerationType.SEQUENCE)
	private Long id; 
	@OneToOne
	private Currency fromCurrency;
	@OneToOne
	private Currency toCurrency;
	private double rate;
	
	
	
	public ExchangeRate(Currency fromCurrency, Currency toCurrency, double rate) {
		this.fromCurrency = fromCurrency;
		this.toCurrency = toCurrency;
		this.rate = rate;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Currency getFromCurrency() {
		return fromCurrency;
	}



	public void setFromCurrency(Currency fromCurrency) {
		this.fromCurrency = fromCurrency;
	}



	public Currency getToCurrency() {
		return toCurrency;
	}



	public void setToCurrency(Currency toCurrency) {
		this.toCurrency = toCurrency;
	}



	public double getRate() {
		return rate;
	}



	public void setRate(double rate) {
		this.rate = rate;
	}



	public ExchangeRate() {
		
	}

}
