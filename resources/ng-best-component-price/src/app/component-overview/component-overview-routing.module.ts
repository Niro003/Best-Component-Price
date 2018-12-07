import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YourBundlesComponent } from './your-bundles/your-bundles.component';
import { LocationToBuyBundleComponent } from './location-to-buy-bundle/location-to-buy-bundle.component';
import { ComponentRecentlyLookedComponent } from './component-recently-looked/component-recently-looked.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'your/bundles', component: YourBundlesComponent },
  { path: 'location/bundle/buy', component: LocationToBuyBundleComponent},
  { path: 'recently/looked/components', component: ComponentRecentlyLookedComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentOverviewRoutingModule { }
