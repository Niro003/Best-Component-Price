import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from './component.class';
import { HelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class BundleService {
  bundle: Component[];
  bundles: any;
  constructor(private httpClient: HttpClient, private helper:HelperService) { }
  createBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.helper.addToStorageArray(this.bundle,'bundles');
    localStorage.removeItem('bundle');
    console.log(this.bundle);
    return this.httpClient.post('api/bundle/store', this.bundle, { responseType: 'text' });
  }



}