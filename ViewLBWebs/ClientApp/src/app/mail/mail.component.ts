import { Component, OnInit } from '@angular/core';
import { MailService } from './mail.service';
import { Mail } from './mail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  displayedColumns;
  dataSource;
  constructor(private mailService: MailService, private route: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.mailService.getData()
      .subscribe((result) => {
        this.displayedColumns = ['dnommail', 'mailuser', 'passmail', 'lnkmail', 'accions'];
        this.dataSource = result as Mail[];
      },
        (error) => {
          console.error(error);
        });
  }

  addData() {
    this.route.navigateByUrl("mail-add");
  }

  deleteData(id: number) {
    this.mailService.deleteData(id).subscribe(
      () => this.fetchData()
    );
  }

}
