import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {  BuildingComponent } from './component.class';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchItemService {

  constructor(private httpClient: HttpClient) { }

  getSearchResult(title) {
    console.log(title);
    if (title == "") {
      const simpleObservable = new Observable<BuildingComponent[]>((observer) => {

        // observable execution
        observer.next([new BuildingComponent("","","")])
        observer.complete()
      });
      return simpleObservable;
    }
    return this.httpClient.get('api/search/components/' + title)
      .pipe(
        tap((response: BuildingComponent[]) => {
          return response.map(component =>
            new BuildingComponent(component['article-title'], component.price, component.image))
        })
      );;
  }
}
