import { Component, NgModule, Inject } from '@angular/core';
import { Acces } from './acces';
import { AccesService } from './acces.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css'],
})


export class AccesComponent {
  public accesses: Acces[];
  dataSource; 
  displayedColumns: string[];
  pass;

  constructor(private accesService: AccesService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.accesService.getData()
      .subscribe((result) => {
        this.displayedColumns = ['userWp', 'passWd', 'linkWp', 'acc', 'accions'];
        this.dataSource = result as Acces[];
      },
        (error) => {
          console.error(error);
        });
  }

  deleteData(id: number) {
    this.accesService.deleteData(id).subscribe(
      () => this.fetchData()
    );
  }

  addData() {
    this.router.navigateByUrl("add-acces");
  }

  updateData(accesid: number) {
    this.router.navigate(['update-acces'], { queryParams: { id: accesid } });
  }

  descrinptpassword(accesid: number) {
    this.pass = this.accesService.descrinptpassword(accesid);
    alert(this.pass);
  }
}
