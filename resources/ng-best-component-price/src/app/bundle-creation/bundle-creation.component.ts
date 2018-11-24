import { Component, OnInit } from '@angular/core';
import { BundleService } from 'app/shared/bundle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bundle-creation',
  templateUrl: './bundle-creation.component.html',
  styleUrls: ['./bundle-creation.component.css']
})
export class BundleCreationComponent implements OnInit {

  constructor(private toastr: ToastrService,private bundleService: BundleService) { }
  bundle: any
  ngOnInit() {
    this.createBundle();
  }

  createBundle(){
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    console.log(this.bundle);
/*    this.bundleService.createBundle()
      .subscribe(
        res => {
          if (res == 'ok'){
          this.toastr.success('Successfull Bundle Creation', 'Bundle was added to library')
          }else {
            this.toastr.error('Error Bundle Creation', 'Bundle was not added to library');
          }
        },
        error => this.toastr.error('Error Bundle Creation', 'The server served a http error')); */
    
  }

}
