import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './currency';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
 
  currencies:Currency[] = [];
  currency: Currency = new Currency();
  view:number = 1;

  constructor(
    private service:CurrencyService,
    private router:Router,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies(){
    this.service.allCurrencies().subscribe(currs=>{
      this.currencies = currs;
    })
  }

  save(){
    if(this.currency.id == undefined){
      this.service.createCurrency(this.currency).subscribe(data=>{
        this.ngOnInit();
        this.router.navigate(["/rate"]);
        this.toast.success( 'Currency created.', 'SAVED!!!');
      },(err=>{
        this.toast.error('something went wrong...','Error!!!');
      }))
    }else{
      this.service.updateCurrency(this.currency).subscribe(up=>{
        this.ngOnInit();
        this.view = 1;
        this.toast.success( 'Currency edited.', 'UPDATED!!!');
      },(err=>{
        this.toast.error('something went wrong...','Error!!!');
      }))
    }
  }

  delete(curr){
    if(!confirm(`Are you sure you want to delete ${curr.name}`))return;
    this.service.deleteCurrency(curr.id).subscribe(out=>{
      this.getCurrencies();
      this.ngOnInit();
      this.toast.error(`${curr.name} was deleted`,'Deleted!!!')
    })
  }

  // print(){
  //   alert(`${this.naira} Naira is ${this.dollar} US dollars`)
  // }


  edit(curr){
    this.currency = curr;
    this.view = 0;
  }

  create(){
    this.currency = new Currency();
    this.view = 0;
  }

  goBack(){
    this.view = 1;
  }



}
