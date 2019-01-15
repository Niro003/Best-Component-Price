import { Component, OnInit, ViewChild } from '@angular/core';
import { BundleService } from 'app/shared/bundle.service';
import { ToastrService } from 'ngx-toastr';
import { BuildingComponent } from '../../shared/component.class'
import { HelperService } from 'app/shared/helper.service';
import { Subscription } from 'rxjs';
import { MatSelectionList, MatListOption } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

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
  //https://www.obi.at/baumarkt/services/online-services/lieferung/
  //€ 79,99, 19,99 €
  // https://www.hornbach.at/cms/de/at/mein_hornbach/services/faq_onlineshop_1/fragen_zum_versand_lieferung/fragen_zum_versand_lieferung.html
  // is calculated
  hornbachDeliveryCost: any = 30.00;
  obiDevliveryCost: any = 35.00;
  costPerKM = 1.2;
  distanceInKM = 30;
  distinctCompanies = [];
  obiOverallPrice = 0;
  hornbachOverallPrice = 0;
  overAllPriceWithDeliveryCost = 0;
  selectedObiPrice = 0;
  selectedHornbachPrice = 0;
  selectedOverallPrice = 0;
  obiRow1 = false;
  obiRow2 = false;
  obiRow3 = false;
  hornbachRow1 = false;
  hornbachRow2 = false;
  hornbachRow3 = false;
  selectedOptions1: any = [];
  selectedOptions2: any = [];
  selectedOptions3: any = [];
  @ViewChild(MatSelectionList) selectionList: MatSelectionList;

  ngOnInit() {
    //   this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
    this.bundle = JSON.parse(localStorage.getItem('bundle')) ? JSON.parse(localStorage.getItem('bundle')) : [];
    this.createBundle();
  }

  selectedOptionsChange(event) {
    console.log(this.selectedOptions1);
    console.log(this.selectedOptions2);
    console.log(this.selectedOptions3);
    event.forEach(element => {
      if (element.name == 'obi') {
        this.selectedObiPrice = element.price;
        if (element.row == 1) {
          this.obiRow2 = true;
          this.obiRow3 = true;
        }
        if (element.row == 2) {
          this.obiRow1 = true;
          this.obiRow3 = true;
        }
        if (element.row == 3) {
          this.obiRow2 = true;
          this.obiRow1 = true;
        }
      }
      if (element.name == 'hornbach') {
        this.selectedHornbachPrice = element.price;
        if (element.row == 1) {
          this.hornbachRow2 = true;
          this.hornbachRow3 = true;
        }
        if (element.row == 2) {
          this.hornbachRow1 = true;
          this.hornbachRow3 = true;
        }
        if (element.row == 3) {
          this.hornbachRow1 = true;
          this.hornbachRow2 = true;
        }
      }
    });
    if (this.selectedOptions1.filter(element => (element.name === "obi")).length < 1 &&
      this.selectedOptions2.filter(element => (element.name === "obi")).length < 1 &&
      this.selectedOptions3.filter(element => (element.name === "obi")).length < 1) {

      this.obiRow1 = false;
      this.obiRow2 = false;
      this.obiRow3 = false;
      this.selectedObiPrice = 0;
    }
    if (this.selectedOptions1.filter(element => (element.name === "hornbach")).length < 1 &&
      this.selectedOptions2.filter(element => (element.name === "hornbach")).length < 1 &&
      this.selectedOptions3.filter(element => (element.name === "hornbach")).length < 1) {
        
      this.hornbachRow1 = false;
      this.hornbachRow2 = false;
      this.hornbachRow3 = false;
      this.selectedHornbachPrice = 0;
    }

    this.selectedOverallPrice = this.selectedObiPrice + this.selectedHornbachPrice;
    console.log('on ng model change', event);
  }

  createBundle() {
    console.log(this.bundle);
    this.price = this.bundle.reduce((a, b) => {
      console.log(b);
      var componentPrice = Number(b.price.replace(/[^0-9.,]+/g, "").replace(/,/g, '.'));
      // check if product is from obi
      if (b.company == "/assets/obi-print.jpg") {
        this.obiOverallPrice += componentPrice;
      } else {
        this.hornbachOverallPrice += componentPrice;
      }
      console.log(componentPrice);
      return a + componentPrice;
    }, 0);
    this.overAllPriceWithDeliveryCost = this.price;
    if (this.obiOverallPrice != 0) {
      this.overAllPriceWithDeliveryCost += this.obiDevliveryCost;
    }
    if (this.hornbachOverallPrice != 0) {
      this.overAllPriceWithDeliveryCost += this.hornbachDeliveryCost;
    }
    this.bundle.forEach(
      data => {
        var number2 = Number(data.price.replace(/[^0-9.,]+/g, "").replace(/,/g, '.'));

        console.log(number2);
      }
    )
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
