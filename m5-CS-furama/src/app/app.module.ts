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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    FooterComponent,
    FacilityComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
