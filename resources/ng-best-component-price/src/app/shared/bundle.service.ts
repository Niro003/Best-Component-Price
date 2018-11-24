import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from './component.class';

@Injectable({ providedIn: 'root' })
export class BundleService {
  bundle: Component[];
  bundles: any;
  constructor(private httpClient: HttpClient) { }
  createBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    
    if (localStorage.getItem("username") === null) {
      localStorage.setItem('bundles',JSON.stringify([this.bundle]));
    }else{
      this.bundles = JSON.parse(localStorage.getItem('bundles'));
      this.bundles.push(this.bundle);
      localStorage.setItem('bundles',JSON.stringify(this.bundles));
    }
    localStorage.removeItem('bundle');
    console.log(this.bundle);
    return this.httpClient.post('api/bundle/store', this.bundle, { responseType: 'text' });
  }
}