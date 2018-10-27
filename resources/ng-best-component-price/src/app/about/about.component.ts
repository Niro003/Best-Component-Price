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
  messagesEducation: any =
    [
      {
        from: 'HTL',
        subject: '5 Jährig',
        content: 'abgeschlossen'
      },
      {
        from: 'IT-Weiterbildung',
        subject: 'Online Kurse und Universitäten',
        content: 'Zeitweise Online Kurse (Harward) und Universitätsmodule in Wien besucht'
      }
    ];
  messagesJobExp: any =
    [
      {
        from: '2014-2016',
        subject: 'Software-Developer',
        content: 'G4G GmbH'
      },
      {
        from: '2016-dato',
        subject: 'Fullstack-Developer',
        content: 'Hobex AG'
      }
    ];
  messagesProjects: any =
    [
      {
        from: 'ShakeMe',
        subject: 'Android & Erlang',
        content: 'Messaging App'
      },
      {
        from: 'Authorisierungs-Client',
        subject: 'AngularJS',
        content: 'Verwaltung der authorisierungen (Zahlungen), die an Terminals durchgeführt wurden'
      },
      {
        from: 'Worry-Free-Price',
        subject: 'Angular',
        content: 'Eigene Homepage'
      },
      {
        from: 'Auction-House',
        subject: 'Angular',
        content: 'Betting System mit Ebay API'
      },
      {
        from: 'Youcraft',
        subject: 'Angular',
        content: 'Lade deine eigene Kreationen hoch und teile bzw. diskutiere sie mit anderen Personen'
      },
      {
        from: 'Gitlab-Dashboard',
        subject: 'AngularJS & NodeJS',
        content: 'Schaue dir Statistiken von deinen Gitlab-Projekten -und User an'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
