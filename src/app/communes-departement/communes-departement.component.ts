import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegionsService} from "../../services/regions.service";
import {DepartementsService} from "../../services/departements.service";
import {CommunesService} from "../../services/communes.service";
import {Departement} from "../../models/departement";
import {Commune} from "../../models/commune";
import {Region} from "../../models/region";

@Component({
  selector: 'app-communes-departement',
  templateUrl: './communes-departement.component.html',
  styleUrls: ['./communes-departement.component.scss']
})
export class CommunesDepartementComponent implements OnInit {

  region: Region|undefined;
  departement: Departement|undefined;
  arrayCommunes: Commune[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private regionsService: RegionsService,
    private departementsService: DepartementsService,
    private communesService: CommunesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const codeDpt: string = params.codeDpt;
      const codeReg: string = params.codeRegion;
      if (codeReg) {
        this.regionsService.getRegionByCode(codeReg).subscribe((regionJson) => {
          this.region = regionJson;
        });
      }
      if (codeDpt) {
        this.departementsService.getDepartementByCode(codeDpt).subscribe((departJson) => {
          this.departement = departJson;
        });
        this.communesService.getCommunesByDepartement(codeDpt).subscribe((communesJson) => {
          this.arrayCommunes = communesJson;
        });
      }
    });
  }

}
