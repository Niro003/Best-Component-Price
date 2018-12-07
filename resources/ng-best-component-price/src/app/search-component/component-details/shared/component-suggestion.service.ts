import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ComponentSuggestionService {
  constructor(private httpClient: HttpClient) { }
  
  getComponentSuggestion(id) {
    return this.httpClient.get('api/suggestions/components/' + id);
  }
}