import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from './component.class';

@Injectable({providedIn: 'root'})
export class BundleManagementService {
  bundle: Component[];
  constructor(private httpClient: HttpClient) { }
  createBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.httpClient.post('api/create/bundle/',this.bundle);
  }
}