import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeFormComponent } from './exchange-form/exchange-form.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConversionRateComponent } from './conversion-rate/conversion-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeFormComponent,
    UploadFormComponent,
    CurrencyComponent,
    ConversionRateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
