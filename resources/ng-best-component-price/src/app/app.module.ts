import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatProgressSpinnerModule,
  MatMenuModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,

  MatAutocompleteModule,
  MatDialogModule,
  MatDialogRef
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { APIInterceptor } from './shared/app.api-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { PageInfoModule } from './page-info/page-info.module';
import { SearchComponentModule } from './search-component/search-component.module';
import { ComponentOverviewModule } from './component-overview/component-overview.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PageInfoModule,
    SearchComponentModule,
    ComponentOverviewModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      progressBar: true,
      progressAnimation: 'increasing',
      easeTime: 500
    }),
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
