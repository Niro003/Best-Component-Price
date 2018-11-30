import { Injectable } from '@angular/core';
import { Component } from './component.class';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }
  navigateToComponent(component: Component) {
    localStorage.setItem('component',JSON.stringify(component));
    this.router.navigate(['/component/details']);
  }

  private _bundleButtonFooterSource = 
  new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('bundle')).length > 0);
  // Observable navItem stream
  _bundleButtonFooter$ = this._bundleButtonFooterSource.asObservable();
  // service command
  showBundleButtonAppearance(item) {
    this._bundleButtonFooterSource.next(item);
  }

  private _changedComponentDetailsSource = 
  new Subject();
  // Observable navItem stream
  _changedComponentDetailsFooter$ = this._changedComponentDetailsSource.asObservable();
  // service command
  changeComponentDetails() {
    this._changedComponentDetailsSource.next();
  }
}
