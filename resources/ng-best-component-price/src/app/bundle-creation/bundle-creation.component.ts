import { Component, OnInit } from '@angular/core';
import { BundleService } from 'app/shared/bundle.service';
import { ToastrService } from 'ngx-toastr';
import { BuildingComponent } from '../shared/component.class'
import { HelperService } from 'app/shared/helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bundle-creation',
  templateUrl: './bundle-creation.component.html',
  styleUrls: ['./bundle-creation.component.css']
})
export class BundleCreationComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private bundleService: BundleService,
    private helperService: HelperService) { }
  bundle: BuildingComponent[];
  price: number;
  subscription:Subscription;
  distinctCompanies = [];
  ngOnInit() {
    this.createBundle();

    this.subscription = this.helperService._changedComponentDetailsFooter$
       .subscribe( => this.showBundleButton = item)
  }

  createBundle() {
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    console.log(this.bundle);
    this.price = this.bundle.reduce(add, 0);

    function add(a, b) {
      console.log(b);
      var number2 = Number(b.price.replace(/[^0-9.,]+/g, "").replace(/,/g, '.'));
      console.log(number2);
      return a + number2;
    }
    this.distinctCompanies = [...new Set(this.bundle.map(item => item.company))];
    this.helperService.showBundleButtonAppearance(false);
    console.log(this.distinctCompanies);
    this.bundleService.createBundle()
      .subscribe(
        res => {
          if (res == 'ok') {
            this.toastr.success('Successfull Bundle Creation', 'Bundle was added to library')
          } else {
            this.toastr.error('Error Bundle Creation', 'Bundle was not added to library');
          }
        },
        error => this.toastr.error('Error Bundle Creation', 'The server served a http error'));

  }

}
