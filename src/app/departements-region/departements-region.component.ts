import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DepartementsService} from "../../services/departements.service";
import {RegionsService} from "../../services/regions.service";
import {Departement} from "../../models/departement";
import {Region} from "../../models/region";

@Component({
  selector: 'app-departements-region',
  templateUrl: './departements-region.component.html',
  styleUrls: ['./departements-region.component.scss']
})
export class DepartementsRegionComponent implements OnInit {

  region: Region|undefined;
  arrayDepartements: Array<Departement> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private departementService: DepartementsService,
    private regionService: RegionsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const codeRegion: string = param.codeRegion;
      if (codeRegion) {
        this.regionService.getRegionByCode(codeRegion).subscribe((jsonRegion) => {
          this.region = jsonRegion;
        });
        this.departementService.getDepartementsByRegion(codeRegion).subscribe((jsonDepartements) => {
          this.arrayDepartements = jsonDepartements;
        });
      }
    });
  }

}
