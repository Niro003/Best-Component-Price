import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HelperService } from 'app/shared/helper.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor(
    private toastr: ToastrService, 
    private route: Router,
    private helperService: HelperService) { }
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
    this.helperService.showBundleButtonAppearance(true);
    this.toastr.success('Initiation started', 'Component added to Bundle successfully');
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.updateButtonDisplay();
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
