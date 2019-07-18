package com.example.demo.exchangeRate;

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
@CrossOrigin(origins = "*")
public class ExhangeRateController {
	
	@Autowired
	private ExchangeRateService service;
	
//	api to get exchage rates
	@GetMapping("/exchangeRates")
	public List<ExchangeRate> findAll(){
		return service.findAll();
	}
	
//	api to get an exchange rate
	@GetMapping("/exchangeRate/{id}")
	public ExchangeRate findById(@PathVariable Long id) {
		return service.findById(id);
	}
	
//	api to create an exchange rate
	@PostMapping("/exchangeRate")
	public ExchangeRate create(@RequestBody ExchangeRate exchangeRate) {
		return service.create(exchangeRate);
	}
	
//	api to update an exchange rate
	@PutMapping("/exchangeRate")
	public ExchangeRate update(@RequestBody ExchangeRate exchangeRate) {
		return service.create(exchangeRate);
	}
	
//	api for deleting an exchange rate
	@DeleteMapping("/exchangeRate/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
	
//	api for getting rate with fromCurrency and toCurrency
	@GetMapping("/exchangeRate/{fromcurrencycode}/{tocurrencycode}")
	public double findByFromCurrencyToCurrency(@PathVariable(value = "fromcurrencycode") String fcode,@PathVariable(value = "tocurrencycode") String tcode) {
		
		return service.findByFromCurrencyToCurrency(fcode, tcode);
	}


}
