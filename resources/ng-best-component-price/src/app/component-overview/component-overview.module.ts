import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentOverviewRoutingModule } from './component-overview-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentOverviewRoutingModule
  ]
})
export class ComponentOverviewModule { }
