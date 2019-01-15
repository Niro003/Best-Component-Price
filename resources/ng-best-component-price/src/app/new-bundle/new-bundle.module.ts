import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBundleRoutingModule } from './new-bundle-routing.module';
import { ShowYourCurrentBundleComponent } from './show-your-current-bundle/show-your-current-bundle.component';
import { MatListModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { BundleCreationComponent } from './bundle-creation/bundle-creation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowYourCurrentBundleComponent, BundleCreationComponent],
  imports: [
    CommonModule,
    NewBundleRoutingModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule
  ],
  entryComponents: [ShowYourCurrentBundleComponent]
})
export class NewBundleModule { }
