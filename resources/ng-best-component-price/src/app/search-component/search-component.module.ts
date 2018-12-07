import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponentRoutingModule } from './search-component-routing.module';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentDetailsComponent } from './component-details/component-details.component';
import { MatListModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    ComponentListComponent,
    ComponentDetailsComponent,
  ],
  imports: [
    CommonModule,
    SearchComponentRoutingModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule,
    ToastrModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [ComponentDetailsComponent]
})
export class SearchComponentModule { }
