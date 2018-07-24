import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(environment.EMAIL_REGEX)]);
  constructor() {

  }

  ngOnInit() {
  }

}
