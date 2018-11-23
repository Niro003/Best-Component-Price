import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  component: Component;
  bundle: Component[];
  ngOnInit() {
    this.component = JSON.parse(localStorage.getItem('component'));
    console.log(this.component);
  }

  initiateBundle() {
    localStorage.setItem('bundle',JSON.stringify([this.component]));
    this.toastr.success('Initiation started', 'Component added to Bundle successfully');
  }
  addToBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.bundle.push(this.component);
    localStorage.setItem('bundle',JSON.stringify(this.bundle));
    this.toastr.success('Add to', 'Component added to Bundle successfully');
  }
  createBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    
  }

}
