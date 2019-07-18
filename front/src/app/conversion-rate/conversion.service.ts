import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversion } from './conversion';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  baseUrl:string = "http://localhost:4111/api";

  constructor(private http:HttpClient) { }

  allRates(){
    return this.http.get<Conversion[]>(this.baseUrl + "/exchangeRates");
  }

  createRate(rate:Conversion){
   return this.http.post(this.baseUrl + "/exchangeRate" ,rate);
  }

  updateRate(rate:Conversion){
    return this.http.put(this.baseUrl + "/exchangeRate" , rate);
   }

  delete(id){
    return this.http.delete(this.baseUrl + "/exchangeRate/" + id);
  } 

  getRate(fromcurrencycode: string,tocurrencycode: string){
    return this.http.get(this.baseUrl  + "/exchangeRate/" + fromcurrencycode +"/"+ tocurrencycode);
  }
}
