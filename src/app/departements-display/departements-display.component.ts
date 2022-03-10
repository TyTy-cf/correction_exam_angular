import {Component, Input} from '@angular/core';
import {Departement} from "../../models/departement";

@Component({
  selector: 'app-departements-display',
  templateUrl: './departements-display.component.html',
  styleUrls: ['./departements-display.component.scss']
})
export class DepartementsDisplayComponent {

  @Input()
  arrayDepartement: Array<Departement> = [];

}
