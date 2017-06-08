import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navLinks = [
      {link:'home',label:'Home'},
      {link:'about',label:'About'},
      {link:'clients',label:'Clients'},
      {link:'contact',label:'Contacts'}
  ];

}
