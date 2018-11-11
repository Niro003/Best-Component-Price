import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor() { }
  component: Component;
  ngOnInit() {
    this.component = JSON.parse(localStorage.getItem('component'));
    console.log(this.component);
  }

}
