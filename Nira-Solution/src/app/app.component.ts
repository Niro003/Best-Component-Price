import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navLinks = [
      {link: 'home', label: 'Home'},
      {link: 'about', label: 'About'},
      {link: 'clients', label: 'Clients'},
      {link: 'blog', label: 'Blog'},
      {link: 'contact', label: 'Contact Me'},
      {link: 'site/notice', label: 'Site Notice'}
  ];

}
