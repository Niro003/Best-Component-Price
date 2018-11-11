import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  messagesAboutCompany: any =
  [
    {
      from: 'Best-Component-Price',
      subject: 'Philosophy',
      content: 'To find the best building component price can be difficult<br> ' +
      'We try to solve that problem by<br>' +
      'offering a service where you get as fast as possible the cheapest component bundles.'
    },
    {
      from: 'Online-Shop',
      subject: 'Offers',
      content: 'We offer from a variety of online shops component bundles.' +
       +'Compare their prices and be excited to get in a very easy way the cheapest price.'
    },
    {
      from: 'Suche Position beziehungsweise Optionen',
      subject: 'Kategorisieren und Sortieren',
      content: `Auf der Toolbar ganz
      oben sehen Sie die Suchleiste, wo sie das gewünschte Produkt suchen können.<br> Je nach wunsch können Sie natürlich kategorisieren
      beziehungsweise die Produkte Sortieren.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
