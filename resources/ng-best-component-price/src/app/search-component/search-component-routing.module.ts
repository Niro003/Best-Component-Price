import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDetailsComponent } from './component-details/component-details.component';
import { ComponentListComponent } from './component-list/component-list.component';

const routes: Routes = [
  { path: 'component/list/:category', component: ComponentListComponent},
  { path: 'component/details', component: ComponentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchComponentRoutingModule { }
