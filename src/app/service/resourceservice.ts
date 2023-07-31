 import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ressource } from 'src/models/ressource';

 

 

@Injectable({

  providedIn: 'root'

})

export class ReclamationService {

 

  readonly API_URL = 'http://localhost:8080';

 

  constructor(private httpClient: HttpClient) { }

 

  getAllRessources(): Observable<ressource[]> {

    return this.httpClient.get<ressource[]>(`${this.API_URL}/mobility/getAllRessources`);

  }

  removeRessouce(Ressource : any) {

    return this.httpClient.delete(`${this.API_URL}/mobility/removeRessource`, Ressource)

  }
  updateRessource(Ressource : any) {

    return this.httpClient.put(`${this.API_URL}/mobility/updateRessource`, Ressource)

  }
  addRessourcewithIdUser(Ressource : any) {

    return this.httpClient.post(`${this.API_URL}/mobility/addRessourcewithIdUser`, Ressource)

  }

 

  

 

}

