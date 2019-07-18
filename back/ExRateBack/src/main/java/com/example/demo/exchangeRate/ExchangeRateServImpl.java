package com.example.demo.exchangeRate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExchangeRateServImpl implements ExchangeRateService {

	@Autowired
	private ExchangeRateRepository repo;
	
	@Override
	public List<ExchangeRate> findAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public ExchangeRate findById(Long id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public ExchangeRate create(ExchangeRate entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

	@Override
	public ExchangeRate update(ExchangeRate entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

	@Override
	public double findByFromCurrencyToCurrency(String fromcurrencycode, String tocurrencycode) {
		// TODO Auto-generated method stub
		return repo.findByFromCurrencyToCurrency(fromcurrencycode, tocurrencycode);
	}

}
