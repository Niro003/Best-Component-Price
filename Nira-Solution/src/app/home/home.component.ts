import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messages:any =
    [
      {
        from:'Android & IOS',
        subject:'Mobile-Entwicklung',
        content:'Beides möglich in native, aber auch durch' +
        ' Frameworks wie ionic ist eine schnellere Entwicklung' +
        ' für beide Mobile-Betriebssysteme möglich'
      },
      {
        from:'Angular',
        subject:'Frontend-Entwicklung',
        content:'Als CSS-Framework kann Angular Material oder Bootstrap verwendet werden. Es gibt die Möglichkeit Frontend -und Backend Entwicklung im Bundle zu kompinieren.'
      },
      {
        from:'NodeJS',
        subject:'Backend-Entwicklung',
        content:'Verschiedenste Datenbanken sind möglich zu verwenden, aber auch Dokumenten Systeme wie MongoDB kann in das Backend eingebunden werden'
      },
      {
        from:'Erlang',
        subject:'Massively scalable soft real-time systems',
        content:'Ihre Stärke ist die parallele Verarbeitung von Programmlogik, ein sehr effizientes und leichtgewichtiges ' +
        'Benachrichtigungsystem für die Interprozesskommunikation ' +
        'sowie eine ausgeprägte Fehlertoleranz („Let it crash“ Philosophie). ' +
        'Des weiteren ist es bei Erlang möglich, Module zur Laufzeit des Programms ohne Neustart auszutauschen bzw. ' +
        'zu aktualisieren, wodurch eine hohe Verfügbarkeit des Systems '
      },
      {
        from:'ASP.NET',
        subject:'Fullstack-Entwicklung',
        content:'Web Application Framework von Microsoft, mit dem sich dynamische Webseiten, Webanwendungen und Webservices entwickeln lassen.'
      },
      {
        from:'Sonstiges',
        subject:'Entwicklung',
        content:'Es werden bei Anfrage auch andere Programmiersprachen genommen!'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}