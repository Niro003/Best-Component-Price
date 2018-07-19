import { Component, OnInit } from '@angular/core';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navLinks = [
      {link: 'home', label: 'Home'},
      {link: 'about', label: 'About'},
      {link: 'clients', label: 'Clients'},
      {link: 'blog', label: 'Blog'},
      {link: 'contact', label: 'Contact Me'},
      {link: 'site/notice', label: 'Site Notice'}
  ];
  selectedLanguage: string;
  languages: Language[] = [
    {value: 'german', viewValue: 'German'},
    {value: 'english', viewValue: 'English'},
    {value: 'italian', viewValue: 'Italian'}
  ];
  ngOnInit(): void {
    this.selectedLanguage = this.languages[0].value;
  }


}
