import { Component, OnInit } from '@angular/core';
import {RegionsService} from "../../services/regions.service";
import {Region} from "../../models/region";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  arrayRegions: Array<Region> = [];

  constructor(private regionService: RegionsService) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((regionsJson) => {
      this.arrayRegions = regionsJson;
    });
  }

}
