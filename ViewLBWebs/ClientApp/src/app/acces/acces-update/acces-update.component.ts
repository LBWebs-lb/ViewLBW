import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesService } from '../acces.service';
import { Acces } from '../acces';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-acces-update',
  templateUrl: './acces-update.component.html',
  styleUrls: ['./acces-update.component.css']
})

export class AccesUpdateComponent {

  idacces: number;
  public accupdate: Acces[];
  accesFormUpdate: FormGroup;
  hide: boolean;

  constructor(private route: ActivatedRoute,
    private accesService: AccesService,
    private routerorigin: Router,
    public fb: FormBuilder) {
    this.hide = true;
   }

  ngOnInit(): void {

    this.accesFormUpdate = this.fb.group({
      idlb: [''],
      userWp: [''],
      passWd: [''],
      linkWp: [''],
      acc: [''],
    })

    this.route.queryParams.subscribe((params) => {
      this.idacces = params['id'];
      this.accesService.getData(params['id']).subscribe((result) => {
        this.accupdate = result as Acces[];
        this.accesFormUpdate.patchValue({
          idlb: this.accupdate['idlb'],
          userWp: this.accupdate['userWp'],
          passWd: this.accupdate['passWd'],
          linkWp: this.accupdate['linkWp'],
          acc: this.accupdate['acc'],
        });

      });
    });
  }
  submitForm(accesupdateform) {
    this.accesService.updateData(accesupdateform, this.idacces).subscribe(res => {
      console.log('Acces created!')
    });
    this.routerorigin.navigateByUrl('acces');
  }
}
