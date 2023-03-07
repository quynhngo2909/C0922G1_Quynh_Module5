import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { FacilityUpdateComponent } from './facility-update/facility-update.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    FooterComponent,
    FacilityComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ContractComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
