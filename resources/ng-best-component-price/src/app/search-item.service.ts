import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchItemService {

  constructor(private httpClient: HttpClient) { }

  getSearchResult(term) {
    return this.httpClient.get('/api/ebay/search/' + term);
  }
}
