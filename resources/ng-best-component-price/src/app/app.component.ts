import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { map, startWith, debounceTime, switchMap, tap, finalize } from 'rxjs/operators';
import {  BuildingComponent } from "./shared/component.class";
import { Router } from '@angular/router';
import { SearchItemService } from './shared/search-item.service';
import { ShowYourCurrentBundleComponent } from './show-your-current-bundle/show-your-current-bundle.component';
export interface Language {
  value: string;
  viewValue: string;
  flag: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navLinks = [
    { link: 'home', label: 'Overview' },
    { link: 'bundle', label: 'Your Bundles' },
    { link: 'recent', label: 'Recently Looked for' },
    { link: 'components', label: 'Location to buy Bundle' },
    { link: 'blog', label: 'Blog' },
    { link: 'about', label: 'About' }
  ];
  selectedLanguage: string;
  languages: Language[] = [
    { value: 'german', viewValue: 'German', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
    {
      value: 'english', viewValue: 'English',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg'
    },
    { value: 'italian', viewValue: 'Italian', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' }
  ];

  componentsForm: FormGroup;
  filteredComponents: BuildingComponent[];
  isLoading = false;
  ngOnInit(): void {
    this.selectedLanguage = this.languages[0].value;
    this.componentsForm = this.fb.group({
      componentInput: null
    })
    this.componentsForm
      .get('componentInput')
      .valueChanges
      .pipe(
        debounceTime(500),
        tap(() => this.isLoading = true),
        switchMap(value => this.searchItemService.getSearchResult(value)
          .pipe(
            finalize(() => this.isLoading = false),
          ))
      ).subscribe(components => {
        this.filteredComponents = components;
        console.log(components);
      }, error => []);
  }
  constructor(private fb: FormBuilder,
     private searchItemService: SearchItemService, 
     private router: Router,
     private openCurrentBundle: MatBottomSheet) { }
  public getSearchResult(searchTerm) {
    this.searchItemService.getSearchResult(searchTerm).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  displayFn(component: Component) {
    if (component) { return component["article-title"]; }
  }

  chosenComponent(component: Component) {
    console.log(component);
    localStorage.setItem('component',JSON.stringify(component));
    this.router.navigate(['/component/details']);
  }

  showYourBundle() {
    this.openCurrentBundle.open(ShowYourCurrentBundleComponent);
  }

}
