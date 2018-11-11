import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GetComponentsByCategorieService {
  constructor(private httpClient: HttpClient) { }
  getComponentsByCategorie(category: string){
    return this.httpClient.get('api/search/'+category+'/components');
  }
}