import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Region} from "../models/region";

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private rawUrl: string = 'https://geo.api.gouv.fr/regions';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<Array<Region>> {
    return this.httpClient.get<Array<Region>>(this.rawUrl);
  }

  getRegionByCode(code: string): Observable<Region> {
    return this.httpClient.get<Region>(this.rawUrl + '/' + code);
  }
}
