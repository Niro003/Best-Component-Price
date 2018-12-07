import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HelperService } from 'app/shared/helper.service';
import { Subscription } from 'rxjs';
import { ComponentSuggestionService } from './shared/component-suggestion.service';
import { ComponentStatisticsService } from 'app/shared/component-statistics.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private route: Router,
    private helperService: HelperService,
    private cdRef: ChangeDetectorRef,
    private componentSuggestionService: ComponentSuggestionService,
    private componentStatisticsService: ComponentStatisticsService) { }
  @Input('component') component: Component;
  bundle: Component[];
  initiated = false;
  isCreateable = false;
  subscription: Subscription;
  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  suggestedBundle: Component[];
  ngOnInit() {
    if (this.component == null) {
      // it's not called from recent looked components
      this.component = JSON.parse(localStorage.getItem('component'));
      this.helperService.addToStorageArray(this.component,'components');
      this.setNewComponentViews();
    }

    this.bundle = JSON.parse(localStorage.getItem('bundle') ? localStorage.getItem('bundle') : "{}");

    this.updateButtonDisplay();

    this.subscription = this.helperService._changedComponentDetails$
      .subscribe(() => {
        this.component = JSON.parse(localStorage.getItem('component'));
        this.setNewComponentViews();
        this.getComponentSuggestion();
        this.cdRef.markForCheck();
      });

      this.getComponentSuggestion();

  }
  setNewComponentViews(){
    this.componentStatisticsService.setNewComponentViews(this.component).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  getComponentSuggestion() {
    this.componentSuggestionService.getComponentSuggestion(this.component['_id']).subscribe(
      (data:Component[]) => {
        this.suggestedBundle = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }
  updateButtonDisplay() {
    if (this.bundle.length > 0) {
      this.initiated = true;
    }
    if (this.bundle.length > 1) {
      this.isCreateable = true;
    }
  }
  initiateBundle(component = this.component) {
    localStorage.setItem('bundle', JSON.stringify([component]));
    this.helperService.showBundleButtonAppearance(true);
    this.toastr.success('Initiation started', 'Component added to Bundle successfully');
    this.bundle = JSON.parse(localStorage.getItem('bundle'));
    this.updateButtonDisplay();
  }
  addToBundle(component = this.component) {
    this.bundle.push(component);
    localStorage.setItem('bundle', JSON.stringify(this.bundle));
    this.toastr.success('New addition', 'Component added to Bundle successfully');
    this.updateButtonDisplay();
  }
  createBundle(component = this.component) {
    this.bundle.push(component);
    localStorage.setItem('bundle', JSON.stringify(this.bundle));
    this.route.navigate(['bundle', 'creation']);
  }

}
