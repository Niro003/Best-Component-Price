import { Component, OnInit } from '@angular/core';
import { BuildingComponent } from 'app/shared/component.class';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-component-recently-looked',
  templateUrl: './component-recently-looked.component.html',
  styleUrls: ['./component-recently-looked.component.css']
})
export class ComponentRecentlyLookedComponent implements OnInit {

  constructor() { }
  components: BuildingComponent[];
  pageSizeOptions: number[] = [1, 3, 5, 10];
  pageEvent: PageEvent;
  ngOnInit() {
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 1;
    this.components = JSON.parse(localStorage.getItem('components'));
    this.components.reverse();
    this.pageEvent.length=this.components.length;
  }
  onPageChange(event){
    this.pageEvent = event;
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
