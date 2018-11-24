import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor(private toastr: ToastrService, private route: Router) { }
  component: Component;
  bundle: Component[];
  initiated = false;
  isCreateable = false;
  ngOnInit() {
    this.component = JSON.parse(localStorage.getItem('component'));
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.updateButtonDisplay();

  }
  updateButtonDisplay(){
    if (this.bundle.length > 0){
      this.initiated = true;
    }
    if (this.bundle.length > 1){
      this.isCreateable = true;
    }
  }
  initiateBundle() {
    localStorage.setItem('bundle',JSON.stringify([this.component]));
    this.toastr.success('Initiation started', 'Component added to Bundle successfully');
  }
  addToBundle() {
    this.bundle.push(this.component);
    localStorage.setItem('bundle',JSON.stringify(this.bundle));
    this.toastr.success('New addition', 'Component added to Bundle successfully');
    this.updateButtonDisplay();
  }
  createBundle() {
    this.bundle.push(this.component);
    localStorage.setItem('bundle',JSON.stringify(this.bundle));
    this.route.navigate(['bundle','creation']);  
  }

}
