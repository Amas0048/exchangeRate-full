package com.example.demo.exchangeRate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeRateRepository extends JpaRepository<ExchangeRate, Long> {

//	for getting rate with fromCurrency and toCurrency
	@Query("Select u.rate from ExchangeRate u where u.fromCurrency.code= :fromcurrencycode and u.toCurrency.code= :tocurrencycode")
	public double findByFromCurrencyToCurrency(@Param("fromcurrencycode") String fromcurrencycode, @Param("tocurrencycode") String tocurrencycode);
}
