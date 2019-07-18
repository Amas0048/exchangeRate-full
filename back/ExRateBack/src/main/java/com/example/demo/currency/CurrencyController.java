package com.example.demo.currency;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class CurrencyController {

	@Autowired
	private CurrencyService service;
	
//	api to get all currencies
	@GetMapping("/currencies")
	public List<Currency> findAll(){
		return service.findAll();
	}
	
//	api to get a currency
	@GetMapping("/currency/{id}")
	public Currency findById(@PathVariable Long id) {
		return service.findById(id);
	}
	
//	api for creating a currency
	@PostMapping("/currency")
	public Currency create(@RequestBody Currency currency) {
		return service.create(currency);
	}
	
//	api for updating a currency
	@PutMapping("/currency")
	public Currency update(@RequestBody Currency currency) {
		return service.create(currency);
	}
	
//	api to delete a currency
	@DeleteMapping("/currency/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
