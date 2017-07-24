import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  messagesEducation:any =
    [
      {
        from:'HTL',
        subject:'5 Jährig',
        content:'abgeschlossen'
      },
      {
        from:'IT-Weiterbildung',
        subject:'Online Kurse und Universitäten',
        content:'Zeitweise Online Kurse (Harward) und Universitätsmodule in Wien besucht'
      }
    ];
  messagesJobExp:any =
    [
      {
        from:'2014-2016',
        subject:'Software-Developer',
        content:'G4G GmbH'
      },
      {
        from:'2016-dato',
        subject:'Fullstack-Developer',
        content:'Hobex AG'
      }
    ];
  messagesProjects:any =
    [
      {
        from:'ShakeMe',
        subject:'Android & Erlang',
        content:'Messaging App'
      },
      {
        from:'Authorisierungs-Client',
        subject:'AngularJS',
        content:'Verwaltung der authorisierungen (Zahlungen), die an Terminals durchgeführt wurden'
      },
      {
        from:'Nira-Solution',
        subject:'Angular',
        content:'Eigene Homepage'
      },
      {
        from:'Auction-House',
        subject:'Angular',
        content:'Betting System mit Ebay API'
      },
      {
        from:'Youcraft',
        subject:'Angular',
        content:'Lade deine eigene Kreationen hoch und teile bzw. diskutiere sie mit anderen Personen'
      },
      {
        from:'Gitlab-Dashboard',
        subject:'AngularJS & NodeJS',
        content:'Schaue dir Statistiken von deinen Gitlab-Projekten -und User an'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
