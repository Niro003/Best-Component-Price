import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdMenuModule, MdGridListModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdTabsModule,
  MaterialModule
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import 'hammerjs';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent },
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
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdGridListModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    FlexLayoutModule,
    MdMenuModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
