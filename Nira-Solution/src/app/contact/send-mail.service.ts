import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  constructor(private httpClient: HttpClient) { }

  sendMail(forename: string, surname: string, message: string, email: string) {
    console.log(forename);
    return this.httpClient.post('/api/contact/sendMail', {
      forename: forename,
      surname: surname,
      message: message,
      email: email
    });

  }
}

