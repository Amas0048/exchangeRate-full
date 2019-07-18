import { Component, OnInit } from '@angular/core';
import { ConversionService } from './conversion.service';
import { Conversion } from './conversion';
import { Router } from '@angular/router';
import { CurrencyService } from '../currency/currency.service';
import { Currency } from '../currency/currency';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conversion-rate',
  templateUrl: './conversion-rate.component.html',
  styleUrls: ['./conversion-rate.component.css']
})
export class ConversionRateComponent implements OnInit {

  rates: Conversion[] = [];
  currencies: Currency[] = [];
  rate: Conversion = new Conversion();
  view: number = 1;

  constructor(
    private service: ConversionService,
    private altService: CurrencyService,
    private router: Router,
    private toast:ToastrService) { }

  ngOnInit() {
    this.getAllRates();
    this.getAllCurrencies();
  }

  getAllRates() {
    this.service.allRates().subscribe(data => {
      this.rates = data;
    })
  }

  getAllCurrencies() {
    this.altService.allCurrencies().subscribe(currs => {
      this.currencies = currs;
    })
  }

  save() {
    if (this.rate == undefined) {
      this.service.createRate(this.rate).subscribe(all => {
        this.ngOnInit();
        this.router.navigate(["/ex-form"]);
        this.toast.success('Exchange Rate created.','SAVED!!!');
      },(err=>{
        this.toast.error('Something went wrong...','Error!!!');
      }))
    } else {
      this.service.updateRate(this.rate).subscribe(up => {
        this.ngOnInit();
        this.view = 1;
        this.toast.success('Exchange Rate edited.','SAVED!!!');
      },(err=>{
        this.toast.error('Something went wrong...','Error!!!');
      }))
    }
  }

  delete(r) {
    if(!confirm(`Are you sure you want to delete ${r.fromCurrency.name} to ${r.toCurrency.name}`))return;
    this.service.delete(r.id).subscribe(del => {
      this.ngOnInit();
      this.getAllRates();
      this.toast.error(`${r.fromCurrency.name} to ${r.toCurrency.name} was deleted...`,'Deleted!!!')
    })
  }

  edit(r) {
    this.rate = r;
    this.view = 0;
  }

  create() {
    this.rate = new Conversion();
    this.view = 0;
  }

  goBack() {
    this.view = 1;
  }

  equals(ab, bc) {
    if (ab != null && bc != null) {
      if (ab.id == bc.id) {
        return true;
      }

    } else {
      return false;
    }

  }

}
