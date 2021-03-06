import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { map, startWith, debounceTime, switchMap, tap, finalize } from 'rxjs/operators';
import { BuildingComponent } from "./shared/component.class";
import { Router } from '@angular/router';
import { SearchItemService } from './shared/search-item.service';
import { ShowYourCurrentBundleComponent } from './new-bundle/show-your-current-bundle/show-your-current-bundle.component';
import { HelperService } from './shared/helper.service';
import { Subscription } from 'rxjs';
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
    { link: 'your/bundles', label: 'Your Bundles' },
    { link: 'recently/looked/components', label: 'Recently Looked Components' },
    { link: 'location/bundle/buy', label: 'Location to buy Bundle' },
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
  subscription: Subscription;
  showBundleButton: boolean;
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
        this.getMatchedItems(components).forEach(data => components.unshift(data));
        this.filteredComponents = components;
        console.log(components);
      }, error => []);

    this.subscription = this.helper._bundleButtonFooter$
      .subscribe(item => this.showBundleButton = item)
  }
  constructor(private fb: FormBuilder,
    private searchItemService: SearchItemService,
    private helper: HelperService,
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
  getMatchedItems(components: any[]) {
    var uniqueCompanies = components.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.company === item.company && t['article-title'] === item['article-title']
      ))
    );
    var duplicatedArticle = this.getDuplicates(uniqueCompanies);
    var duplicatedComponents = uniqueCompanies.filter((c) => duplicatedArticle.includes(c['article-title']));

    var output = duplicatedArticle.map(data => {
      var arrOut = duplicatedComponents.reduce((acc,curVal) => {
        if (data == curVal['article-title']) {
          acc.push(curVal);
        }
        return acc;
      }, []);
      return {component_match:arrOut};
    });
    return output;
  }
  getDuplicates(components: any[]){
    var uniq = components
      .map((component) => {
        return { count: 1, 'article-title': component['article-title'] }
      })
      .reduce((a, b) => {
        a[b['article-title']] = (a[b['article-title']] || 0) + b.count
        return a
      }, {})
    return Object.keys(uniq).filter((a) => uniq[a] > 1)
  }
  displayFn(component: BuildingComponent) {
    if (component) { return component["article-title"]; }
  }

  chosenComponent(component: BuildingComponent) {
    this.helper.navigateToComponent(component);
    this.helper.changeComponentDetails();
  }

  showYourBundle() {
    this.openCurrentBundle.open(ShowYourCurrentBundleComponent);
  }

}
