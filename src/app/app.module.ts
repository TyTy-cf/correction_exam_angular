import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RegionsComponent } from './regions/regions.component';
import { DepartementsRegionComponent } from './departements-region/departements-region.component';
import { CommunesDepartementComponent } from './communes-departement/communes-departement.component';
import { DepartementsComponent } from './departements/departements.component';
import { DepartementsDisplayComponent } from './departements-display/departements-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    DepartementsRegionComponent,
    CommunesDepartementComponent,
    DepartementsComponent,
    DepartementsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
