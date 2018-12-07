import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { Router } from '@angular/router';
import { HelperService } from 'app/shared/helper.service';
import {BuildingComponent} from '../../shared/component.class';

@Component({
  selector: 'app-show-your-current-bundle',
  templateUrl: './show-your-current-bundle.component.html',
  styleUrls: ['./show-your-current-bundle.component.css']
})
export class ShowYourCurrentBundleComponent implements OnInit {
  bundle: Component[];
  constructor(private bottomSheetRef: MatBottomSheetRef<ShowYourCurrentBundleComponent>,
    private route: Router,private helper: HelperService) { }

  ngOnInit() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
  }
  chosenComponent(component: BuildingComponent){
    this.helper.navigateToComponent(component);
    this.bottomSheetRef.dismiss();
  }
  createBundle(){
    this.route.navigate(['bundle','creation']);
    this.bottomSheetRef.dismiss();  
  }

}
