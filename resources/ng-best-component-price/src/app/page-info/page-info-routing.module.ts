import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DevelopedByComponent } from './developed-by/developed-by.component';
import { BlogComponent } from './blog/blog.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'developedBy/NicholasGrill', component: DevelopedByComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'site/notice', component: SiteNoticeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageInfoRoutingModule { }
