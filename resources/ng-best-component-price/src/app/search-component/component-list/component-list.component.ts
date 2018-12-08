import { Component, OnInit } from '@angular/core';
import { GetComponentsByCategorieService } from './shared/get-components-by-categorie.service';
import { Router, Route, ParamMap, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PageEvent } from '@angular/material';
import { BuildingComponent } from 'app/shared/component.class';
import { HelperService } from 'app/shared/helper.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  service: any;
  components: Component[];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  constructor(private getComponentsByCategoryService: GetComponentsByCategorieService,
    public route: ActivatedRoute,private helper: HelperService) { }

  ngOnInit() {
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 10;

    this.route.paramMap.subscribe((params: ParamMap) =>
      this.getComponentsByCategoryService.getComponentsByCategorie(params.get('category'))
        .subscribe(
          (data: Component[]) => {
            this.components = data;
            this.pageEvent.length=this.components.length;
            console.log(data);
          },
          error => console.log(error)
        ));
  }
  onPageChange(event){
    this.pageEvent = event;
    console.log(event);
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  chosenComponent(component: BuildingComponent) {
    this.helper.navigateToComponent(component);
    this.helper.changeComponentDetails();
  }

}
