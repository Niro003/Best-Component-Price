import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { SendMailService } from './send-mail.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { DialogData } from '../home/home.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(environment.EMAIL_REGEX)]),
    forenameFormControl: new FormControl('', [
      Validators.required]),
    surnameFormControl: new FormControl('', [
      Validators.required]),
    messageFormControl: new FormControl('', [
      Validators.required]),
  });
  constructor(private sendMailService: SendMailService,
    public dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  sendMail(forename, surname, message, email) {
    this.sendMailService.sendMail(forename, surname, message, email).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
