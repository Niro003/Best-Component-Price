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
      from: 'Worry-Free-Price IT-Dienstleistungen',
      subject: 'Philosophie',
      content: 'Für die Worry-Free-Price GmbH ist die Kundenzufriedenheit ein absoluter muss.<br> ' +
      'Wir bemühen uns eine möglichst rasche, effiziente und<br>' +
      'sinnvolle Lösung für das Problem zu finden. Wir bieten auch für das Ausland It-Lösungen an.'
    },
    {
      from: 'Online-Shop',
      subject: 'Angebot',
      content: 'Außer Dienstleistungen und Software Lösungen bieten wir außerdem einen Online-Shop an.'
    },
    {
      from: 'Suche',
      subject: 'Preisvergleich',
      content: `In unserer Suche bieten wir eine Firmen übergreifende<br>
      Suche an. Das heißt wenn sie bei uns nach einen Artikel suchen, werden gleichzeitig mehrere Shops ausgewählt und<br> dort
      wo das gesuchte Produkt am billigsten ist, wird es in der Liste auf die höchste Reihe geschoben.`
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
