import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../mail.service';
import { Mail } from '../mail';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mail-add',
  templateUrl: './mail-add.component.html',
  styleUrls: ['./mail-add.component.css']
})
export class MailAddComponent implements OnInit {

  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  mail: Mail;
  hide: boolean;

  constructor(private _formBuilder: FormBuilder, private servicemail: MailService,
    private router: Router) {
    this.hide = true;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      dnommail: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      mailuser: ['', Validators.required],
      passmail: [''],
      lnkmail: [''],
    });

  }

  Send() {
    let mailuser: Mail = {} as Mail;
    mailuser.dnommail = this.firstFormGroup.controls['dnommail'].value;
    mailuser.mailuser = this.secondFormGroup.controls['mailuser'].value;
    mailuser.passmail = this.secondFormGroup.controls['passmail'].value;
    mailuser.lnkmail = this.secondFormGroup.controls['lnkmail'].value;
    this.servicemail.addData(mailuser).subscribe(res => { });
    this.router.navigateByUrl('mail');
  }
}
