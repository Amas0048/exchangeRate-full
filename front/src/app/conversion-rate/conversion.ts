import { Currency } from '../currency/currency';

export class Conversion {
    id:number; 
	fromCurrency:Currency = new Currency();
	toCurrency:Currency = new Currency();
	rate:number;
}
