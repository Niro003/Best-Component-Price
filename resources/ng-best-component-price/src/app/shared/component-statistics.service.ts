import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ComponentStatisticsService {
  constructor(private httpClient: HttpClient) { }
  
  setNewComponentViews(component) {
    return this.httpClient.post('api/component/store', component, { responseType: 'text' });
  }
  getComponentStatistics() {
    return this.httpClient.get('api/component/statistics');
  }
}