import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-developed-by',
  templateUrl: './developed-by.component.html',
  styleUrls: ['./developed-by.component.css']
})
export class DevelopedByComponent implements OnInit {

  name = 'tests';
  messages: any =
  [
    {
      from: 'IT Support',
      subject: 'Betriebsystem-Einrichtung(Installation)',
      content: 'Einrichtung und Installationen von Windows und Linux Systemen, ' +
      'sowie anderen Betriebssystemen bei Anfrage'
    },
    {
      from: 'IT Administration',
      subject: 'Netzwerk-Einrichtung',
      content: 'Effizientes und schnelles Netzwerk einrichten' +
      ' für Windows sowie Linux'
    },
    {
      from: 'Android & IOS',
      subject: 'Mobile-Entwicklung',
      content: 'Beides möglich in native, aber auch durch' +
      ' Frameworks wie ionic ist eine schnellere Entwicklung' +
      ' für beide Mobile-Betriebssysteme möglich'
    },
    {
      from: 'Angular',
      subject: 'Frontend-Entwicklung',
      content: `Als CSS-Framework kann Angular Material oder Bootstrap verwendet werden.
                Empfehlenswert ist es Angular mit NodeJS als Backend zu kompinieren.`
    },
    {
      from: 'NodeJS',
      subject: 'Backend-Entwicklung',
      content: `Verschiedenste Datenbanken sind möglich zu verwenden,
                aber auch Dokumenten Systeme wie MongoDB (schnellere Zugriffe auf Daten) kann in das Backend eingebunden werden`
    },
    {
      from: 'Erlang',
      subject: 'Massively scalable soft real-time systems',
      content: 'Ihre Stärke ist die parallele Verarbeitung von Programmlogik, ein sehr effizientes und leichtgewichtiges ' +
      'Benachrichtigungsystem für die Interprozesskommunikation ' +
      'sowie eine ausgeprägte Fehlertoleranz („Let it crash“ Philosophie). ' +
      'Des weiteren ist es bei Erlang möglich, Module zur Laufzeit des Programms ohne Neustart auszutauschen bzw. ' +
      'zu aktualisieren, wodurch eine hohe Verfügbarkeit des Systems '
    },
    {
      from: 'ASP.NET',
      subject: 'Fullstack-Entwicklung',
      content: `Web Application Framework von Microsoft,
               mit dem sich dynamische Webseiten, Webanwendungen und Webservices entwickeln lassen.`
    },
    {
      from: 'Sonstiges',
      subject: 'Entwicklung',
      content: 'Es werden bei Anfrage auch andere Programmiersprachen genommen.'
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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openContactMeDialog() {
    const dialogRef = this.dialog.open(ContactComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
