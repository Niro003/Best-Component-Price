import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-show-your-current-bundle',
  templateUrl: './show-your-current-bundle.component.html',
  styleUrls: ['./show-your-current-bundle.component.css']
})
export class ShowYourCurrentBundleComponent implements OnInit {
  bundle: Component[];
  constructor(private bottomSheetRef: MatBottomSheetRef<ShowYourCurrentBundleComponent>) { }

  ngOnInit() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
