import { Injectable } from '@angular/core';
import { Component } from './component.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }
  navigateToComponent(component: Component) {
    localStorage.setItem('component',JSON.stringify(component));
    this.router.navigate(['/component/details']);
  }
}
