import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeFormComponent } from './exchange-form/exchange-form.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConversionRateComponent } from './conversion-rate/conversion-rate.component';

const routes: Routes = [
  {path: "", component: CurrencyComponent},
  {path: "rate", component: ConversionRateComponent},
  {path: "ex-form", component: ExchangeFormComponent},
  {path: "image-upload", component: UploadFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
