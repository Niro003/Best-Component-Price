import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BundleCreationComponent } from './bundle-creation/bundle-creation.component';


const routes: Routes = [
  { path: 'bundle/creation', component: BundleCreationComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
