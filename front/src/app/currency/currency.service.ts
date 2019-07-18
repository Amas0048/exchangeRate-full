import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl:string = "http://localhost:4111/api"

  constructor(
    private http:HttpClient
  ) { }

  allCurrencies(){
    return this.http.get<Currency[]>(this.baseUrl + "/currencies");
  }

  createCurrency(curr:Currency){
    return this.http.post(this.baseUrl + '/currency', curr);
  }

  deleteCurrency(id){
    return this.http.delete(this.baseUrl + "/currency/" + id);
  }

  updateCurrency(curr:Currency){
    return this.http.put(this.baseUrl + '/currency', curr);
  }

}
