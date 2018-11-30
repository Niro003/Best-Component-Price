import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageInfoRoutingModule } from './page-info-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import { DevelopedByComponent } from './developed-by/developed-by.component';
import { MatCardModule, MatExpansionModule, MatListModule, MatIconModule, MatInputModule, MatButtonModule, MatDialogRef, MatDialog } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    BlogComponent,
    SiteNoticeComponent,
    DevelopedByComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    PageInfoRoutingModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ]
})
export class PageInfoModule { }
