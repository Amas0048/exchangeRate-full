import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency/currency.service';
import { Currency } from '../currency/currency';
import { Conversion } from '../conversion-rate/conversion';
import { ConversionService } from '../conversion-rate/conversion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {

 currencies:Currency[] = [];
 conversion:Conversion = new Conversion();

 rate: number;
 fromAmount:number;
 toAmount:Number;

  constructor(
    private currService:CurrencyService,
    private conversionService:ConversionService,
    private toast:ToastrService
    ) { }

  ngOnInit() {
    console.log(this.toAmount)
    this.getAllCurrencies();
  }

  getAllCurrencies(){
    this.currService.allCurrencies().subscribe(currs=>{
      this.currencies = currs;
    })
  }

  getRate(){
    this.conversionService.getRate(this.conversion.fromCurrency.code, this.conversion.toCurrency.code).subscribe(r=>{
      this.rate = +r;
      this.converter();
      this.toast.success('conversion carried out','DONE!!!');
    },(err=>{
      this.toast.error('Rate might not be created...','Error!!!');
    }))
    
  }

  converter(){
    this.toAmount = this.fromAmount * this.rate ;
  }

 

  // print(){
  //   alert(`${this.naira} Naira is ${this.dollar} US dollars`)
  // }

}
