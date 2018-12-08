import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentOverviewRoutingModule } from './component-overview-routing.module';
import { HomeComponent } from './home/home.component';
import { YourBundlesComponent } from './your-bundles/your-bundles.component';
import { MatGridListModule, MatDividerModule, MatPaginatorModule, MatTabsModule } from '@angular/material';
import { LocationToBuyBundleComponent } from './location-to-buy-bundle/location-to-buy-bundle.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentRecentlyLookedComponent } from './component-recently-looked/component-recently-looked.component';
import { SearchComponentModule } from 'app/search-component/search-component.module';

@NgModule({
  declarations: [
    HomeComponent,
    YourBundlesComponent,
    LocationToBuyBundleComponent,
    ComponentRecentlyLookedComponent
  ],
  imports: [
    CommonModule,
    ComponentOverviewRoutingModule,
    MatGridListModule,
    MatDividerModule,
    FlexLayoutModule,
    SearchComponentModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class ComponentOverviewModule { }
