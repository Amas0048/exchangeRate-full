package com.example.demo.currency;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurrencyServiceImpl implements CurrencyService {
	
	@Autowired
	private CurrencyRepository repo;

	@Override
	public List<Currency> findAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Currency findById(Long id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public Currency create(Currency entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

	@Override
	public Currency update(Currency entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

}
