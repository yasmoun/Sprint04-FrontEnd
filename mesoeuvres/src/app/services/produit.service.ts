import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Oeuvre } from '../model/oeuvre.model';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  apiURL: string = 'http://localhost:8081/oeuvres/api/all';

  produits!: Oeuvre[]; //un tableau de produits
  //categories : Categorie[];

  constructor(private http: HttpClient) {}

  listeProduit(): Observable<Oeuvre[]> {
    return this.http.get<Oeuvre[]>(this.apiURL);
  }
}
