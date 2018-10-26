import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatMenuModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ItServicesComponent } from './it-services/it-services.component';
import { BlogComponent } from './blog/blog.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'it-services', component: ItServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'site/notice', component: SiteNoticeComponent },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    ItServicesComponent,
    BlogComponent,
    SiteNoticeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      progressBar: true,
      progressAnimation: 'increasing',
      easeTime: 500
    })
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }