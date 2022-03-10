import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionsComponent} from "./regions/regions.component";
import {DepartementsRegionComponent} from "./departements-region/departements-region.component";
import {CommunesDepartementComponent} from "./communes-departement/communes-departement.component";
import {DepartementsComponent} from "./departements/departements.component";

const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: 'region/:codeRegion/departements', component: DepartementsRegionComponent },
  { path: 'region/:codeRegion/departements/:codeDpt/communes', component: CommunesDepartementComponent },
  { path: 'departements', component: DepartementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
