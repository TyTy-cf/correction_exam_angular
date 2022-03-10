import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../models/departement";

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  private rawUrl: string = 'https://geo.api.gouv.fr';
  private departements: string = '/departements/';

  constructor(private httpClient: HttpClient) { }

  getDepartements(): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(this.rawUrl + this.departements);
  }

  getDepartementsByRegion(code: string): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(this.rawUrl + '/regions/' + code + this.departements);
  }

  getDepartementByCode(code: string): Observable<Departement> {
    return this.httpClient.get<Departement>(this.rawUrl + this.departements + code);
  }
}
