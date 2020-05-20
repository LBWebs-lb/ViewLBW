import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesService } from '../acces.service';

@Component({
  selector: 'app-acces-add',
  templateUrl: './acces-add.component.html',
  styleUrls: ['./acces-add.component.css']
})
export class AccesAddComponent implements OnInit {

  accesForm: FormGroup;
  hide: boolean;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private accesService: AccesService) {
      this.hide = true;
  }

  ngOnInit() {
    this.accesForm = this.fb.group({
      userWp: [''],
      passWd: [''],
      linkWp: [''],
      acc: [''],
    })
  }

  submitForm(accesform) {
    this.accesService.addData(accesform).subscribe(res => {
      console.log('Acces created!')
    });
    this.router.navigateByUrl('acces');
  }

}
