import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Projet } from 'src/models/projet';

 

 

@Injectable({

  providedIn: 'root'

})

export class ReclamationService {

 

  readonly API_URL = 'http://localhost:8080';

 

  constructor(private httpClient: HttpClient) { }

 

  getAllProjet(): Observable<Projet[]> {

    return this.httpClient.get<Projet[]>(`${this.API_URL}/mobility/getAllProjet`);

  }

  removeProjet(Projet : any) {

    return this.httpClient.delete(`${this.API_URL}/mobility/removeProjet`, Projet)

  }
  updateProjet(Projet : any) {

    return this.httpClient.put(`${this.API_URL}/mobility/updateProjet`, Projet)

  }
  addProjetwithIdUser(Projet : any) {

    return this.httpClient.post(`${this.API_URL}/mobility/addProjetwithIdUser`, Projet)

  }

 

  

 

}

