package com.example.demo.exchangeRate;

import java.util.List;


public interface ExchangeRateService {
	
	public List<ExchangeRate> findAll();
	
	public ExchangeRate findById(Long id);
	
	public ExchangeRate create(ExchangeRate entity);
	
	public ExchangeRate update(ExchangeRate entity);
	
	public void delete(Long id);
	
	public double findByFromCurrencyToCurrency( String fromcurrencycode, String tocurrencycode);

}
