import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commune} from "../models/commune";

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  private rawUrl: string = 'https://geo.api.gouv.fr';

  constructor(private httpClient: HttpClient) { }

  getCommunesByDepartement(code: string): Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(this.rawUrl + '/departements/' + code + '/communes');
  }
}
