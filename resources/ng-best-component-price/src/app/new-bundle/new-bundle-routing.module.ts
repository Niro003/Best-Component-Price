import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundleCreationComponent } from './bundle-creation/bundle-creation.component';

const routes: Routes = [
  { path: 'bundle/creation', component: BundleCreationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBundleRoutingModule { }
