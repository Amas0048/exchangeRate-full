package com.example.demo.currency;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface CurrencyService {
	
	public List<Currency> findAll();
	
	public Currency findById(Long id);
	
	public Currency create(Currency entity);
	
	public Currency update(Currency entity);
	
	public void delete(Long id);
	

}
