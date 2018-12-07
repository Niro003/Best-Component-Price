import { Injectable } from '@angular/core';
import { Component } from './component.class';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }

  addToStorageArray (item,name){
    let array;
    if (localStorage.getItem(name) === null) {
      localStorage.setItem(name,JSON.stringify([item]));
    }else{
      array = JSON.parse(localStorage.getItem(name));
      array.push(item);
      localStorage.setItem(name,JSON.stringify(array));
    }
  }

  navigateToComponent(component: Component) {
    localStorage.setItem('component',JSON.stringify(component));
    this.router.navigate(['/component/details']);
  }

  private _bundleButtonFooterSource = 
  new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('bundle') ? localStorage.getItem('bundle'):"{}").length > 0);
  // Observable navItem stream
  _bundleButtonFooter$ = this._bundleButtonFooterSource.asObservable();
  // service command
  showBundleButtonAppearance(item) {
    this._bundleButtonFooterSource.next(item);
  }

  private _changedComponentDetailsSource = 
  new Subject();
  // Observable navItem stream
  _changedComponentDetails$ = this._changedComponentDetailsSource.asObservable();
  // service command
  changeComponentDetails() {
    this._changedComponentDetailsSource.next();
  }
}
