import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from './clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {
  panelOpenState = false;
  dataSource;
  displayedColumns: string[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.clientService.getData()
      .subscribe((result) => {
        this.displayedColumns = ['dnom', 'est'];
        this.dataSource = result as Client[];
      },
        (error) => {
          console.error(error);
        });
  }
}
