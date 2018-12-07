import { Component, OnInit } from '@angular/core';
import { ComponentStatisticsService } from 'app/shared/component-statistics.service';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private componentStatisticsService: ComponentStatisticsService) { }
  private components:any;
  ngOnInit() {
    this.componentStatisticsService.getComponentStatistics().subscribe(
      components => {
        this.components = components;
        //sort by count desc
        this.components.sort((a,b) => (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0)); 

        console.log(components);
      },
      error => console.log(error)
    );
  }

  
}
