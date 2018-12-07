import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-your-bundles',
  templateUrl: './your-bundles.component.html',
  styleUrls: ['./your-bundles.component.css']
})
export class YourBundlesComponent implements OnInit {

  bundles: any[];
  pageSizeOptions: number[] = [1, 3, 5, 10];
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {
    this.bundles = JSON.parse(localStorage.getItem('bundles'));
    this.bundles.reverse();
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 1;


    this.pageEvent.length=this.bundles.length;  
  }
  onPageChange(event){
    this.pageEvent = event;
    console.log(event);
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
