import { Component, OnInit } from '@angular/core';
import {DepartementsService} from "../../services/departements.service";
import {Departement} from "../../models/departement";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  arrayDepartement: Array<Departement> = [];

  constructor(private departementService: DepartementsService) { }

  ngOnInit(): void {
    this.departementService.getDepartements().subscribe((arrayJson) => {
      this.arrayDepartement = arrayJson;
    });
  }

}
